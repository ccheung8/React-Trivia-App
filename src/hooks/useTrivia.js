import { useState, useEffect } from "react";

const ENDPOINT = "https://opentdb.com/api.php?amount=1&type=boolean";
const REQUEST_TOKEN = "https://opentdb.com/api_token.php?command=request";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [gameState, setGameState] = useState(0); // 0, 1, 2

  async function fetchNextQuestion() {
    setLoading(true);
    const res = await fetch(
      ENDPOINT + difficulty + category + "&token=" + token
    );
    const data = await res.json();
    // returns early and sets question to 4 if no more questions
    if (data.response_code == 4) {
      setGameState(3);
      setLoading(false);
      return;
    }
    setQuestion(data.results[0]);
    setLoading(false);
    // starts countdown after fetching question
    setCountdown(5);
  }

  async function fetchSessionToken() {
    if (!token) {
      const data = await (await fetch(REQUEST_TOKEN)).json();
      setToken(data.token);
    }
  }

  useEffect(() => {
    if (countdown <= 0) return;

    let myInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
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
    gameState,
    setGameState,
    setDifficulty,
    setCategory,
    fetchNextQuestion,
  };
}
