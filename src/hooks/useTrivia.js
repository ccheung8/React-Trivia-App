import {useState, useEffect} from "react";

const ENDPOINT = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";
const REQUEST_TOKEN = "https://opentdb.com/api_token.php?command=request";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchNextQuestion() {
    setLoading(true);
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    setQuestion(data.results[0]);
    setLoading(false);
  }

  async function fetchSessionToken() {
    
  }

  // fires when page loads
  useEffect(() => {
    fetchNextQuestion();
  }, []);
  
  return {
    question,
    loading,
    fetchNextQuestion
  }
}