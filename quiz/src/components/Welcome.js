import { useQuestion } from '../context/QuestionProvider';

function Welcome() {
  const { dispatch } = useQuestion();

  return (
    <div className="container d-flex">
      <h1 className="t-center">Welcome to the React Quiz!</h1>
      <h3 className="t-center">
        Let's check your knowledge with 15 questions!
      </h3>
      <h3 className="t-center">You have 3 minutes to answer all questions!</h3>
      <button
        className="btn btn-start"
        onClick={() => dispatch({ type: 'start' })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
