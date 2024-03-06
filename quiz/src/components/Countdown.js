import { useEffect, useState } from 'react';
import { useQuestion } from '../context/QuestionProvider';

function Countdown() {
  const [count, setCount] = useState(180);
  const {dispatch} = useQuestion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c < 1) {
          clearInterval(timer);
          return 0;
        } else {
          return c - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count < 1) {
      dispatch({ type: 'timeout', payload: true });
    }
  }, [count, dispatch]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <span className={`counter-text ${count < 60 && 'danger'}`}>
      {`0${minutes} :`} {`${seconds < 10 ? '0' + seconds : seconds}`}
    </span>
  );
}

export default Countdown;
