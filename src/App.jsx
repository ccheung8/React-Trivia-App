import "./App.css";
import { useState } from "react";
import { QuestionComponent } from "./components/QuestionComponent";
import { ResultsComponent } from "./components/ResultsComponent";
import { StartComponent } from "./components/StartComponent";
import useTrivia from "./hooks/useTrivia";

function App() {
  const [score, setScore] = useState(0);
  const [questionLog, setQuestionLog] = useState([]);

  const {
    question,
    countdown,
    token,
    loading,
    gameState,
    setGameState,
    setDifficulty,
    setCategory,
    fetchNextQuestion,
  } = useTrivia();

  async function handleAnswerSelect(answer) {
    // adds question to questionLog
    setQuestionLog([
      ...questionLog,
      {
        question: question.question,
        answer: answer,
        correctAnswer: question.correct_answer,
      },
    ]);

    if (answer === question.correct_answer) {
      // increments score
      setScore((prev) => prev + 1);
      fetchNextQuestion();
      // changes gameState if no more questions
      if (question == 4) {
        setGameState(3);
      }
    } else {
      // ends game
      setGameState(2);
    }
  }

  if (loading) {
    return (
      <div className="container">
        <h1>Trivia App</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Trivia App</h1>
      {gameState == 0 && (
        <StartComponent
          token={token}
          setDifficulty={setDifficulty}
          setCategory={setCategory}
          onClick={() => {
            setGameState(1);
            fetchNextQuestion();
          }}
        />
      )}
      {gameState == 1 && (
        <QuestionComponent
          counter={countdown}
          onAnswerSelect={handleAnswerSelect}
          question={question.question || "dummy question"}
        />
      )}
      {(gameState == 2 || gameState == 3) && (
        <ResultsComponent
          questionLog={questionLog}
          result={score}
          gameState={gameState}
          resetGame={() => {
            setGameState(0);
            setDifficulty(""); // resets difficulty
            setCategory(""); // resets category
          }}
        />
      )}
    </div>
  );
}

export default App;
