import { useQuestion } from '../context/QuestionProvider';

function Finish() {
  const {
    state: { timeout, correctAnswers, questions, points },
    dispatch,
  } = useQuestion();
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  const correctAnswersPercentage = Math.ceil((points / totalPoints) * 100);

  return (
    <div className="d-flex container">
      {timeout && <h3>Time's out !!!</h3>}
      <h3 className="t-center">
        You scored {points} out of {totalPoints} ({correctAnswersPercentage}%){' '}
        <span className="success">&#10004; {correctAnswers}</span>{' '}
        <span className="danger">
          &#10005; {totalQuestions - correctAnswers}
        </span>
      </h3>
      <button
        className="btn btn-start"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </div>
  );
}

export default Finish;
