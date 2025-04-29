import {useState, useEffect} from "react";

const ENDPOINT = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";
const REQUEST_TOKEN = "https://opentdb.com/api_token.php?command=request";
const COUNTDOWN_TIME = 5000;

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);

  async function fetchNextQuestion() {
    setLoading(true);
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    setQuestion(data.results[0]);
    setLoading(false);
  }

  async function fetchSessionToken() {
    if (!token) {
      const data = await (await fetch(REQUEST_TOKEN)).json();
      console.log(data.token);
      setToken(data.token);
    }
  }

  useEffect(() => {
    // setCountdown(5);
    // while (countdown > 0) {
    //   setTimeout(() => {
    //     setCountdown(prev => prev - 1);
    //     console.log(countdown);
    //   }, 1000);
    // }
    // const mySetTimeOut = setTimeout(() => {
    //   setCountdown(0)
    // }, [COUNTDOWN_TIME]);
    // return () => {
    //   clearTimeout(mySetTimeOut);
    // }
  }, [question]);

  // fires when page loads
  useEffect(() => {
    fetchSessionToken();
  }, []);
  
  return {
    question,
    loading,
    countdown,
    token,
    fetchNextQuestion
  }
}