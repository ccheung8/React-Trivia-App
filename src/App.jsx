import './App.css'
import { useState } from 'react'
import { QuestionComponent } from './components/QuestionComponent'
import { ResultsComponent } from './components/ResultsComponent'
import { StartComponent } from './components/StartComponent'
import useTrivia from './hooks/useTrivia'

function App() {
  const [gameState, setGameState] = useState(0) // 0, 1, 2
  const [score, setScore] = useState(0);
  const { question, countdown, token, loading, fetchNextQuestion } = useTrivia();

  async function handleAnswerSelect(answer) {
    if (answer === question.correct_answer) {
      // increments score
      setScore(prev => prev + 1);
      fetchNextQuestion();
    } else {
      // ends game
      setGameState(2);
    }
  }

  if (loading) {
    return (
      <div className='container'>
        <h1>Trivia App</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>Trivia App</h1>
      {gameState == 0 && <StartComponent
        token={token}
        onClick={() => {
          setGameState(1);
          fetchNextQuestion();
      }}
      />}
      {gameState == 1 && 
        <QuestionComponent
          counter={countdown}
          onAnswerSelect={handleAnswerSelect}
          question={question.question || "dummy question"}
      />}
      {gameState == 2 &&
        <ResultsComponent
          result={score}
          resetGame={() => setGameState(0)}
        />}
    </div>
  )
}

export default App
