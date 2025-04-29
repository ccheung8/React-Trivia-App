import {useState, useEffect} from "react";

const ENDPOINT = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";
const REQUEST_TOKEN = "https://opentdb.com/api_token.php?command=request";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [countdown, setCountdown] = useState(0);

  async function fetchNextQuestion() {
    setLoading(true);
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    setQuestion(data.results[0]);
    setLoading(false);
    // starts countdown
    setCountdown(5);
  }

  async function fetchSessionToken() {
    if (!token) {
      const data = await (await fetch(REQUEST_TOKEN)).json();
      console.log(data.token);
      setToken(data.token);
    }
  }

  useEffect(() => {
    if (countdown <= 0) return;

    let myInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
      console.log(countdown - 1);
      clearTimeout(myInterval);
    }, 1000);

    return () => clearInterval(myInterval);
  }, [countdown]);

  // fires when page loads
  useEffect(() => {
    fetchSessionToken();
  }, []);
  
  return {
    question,
    countdown,
    loading,
    token,
    fetchNextQuestion
  }
}