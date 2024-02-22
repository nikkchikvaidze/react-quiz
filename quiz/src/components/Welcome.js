function Welcome({ dispatch }) {
  return (
    <div className="welcome-container d-flex">
      <h1 className="t-center">Welcome to the React Quiz!</h1>
      <h3>Let's check your knowledge with 15 questions!</h3>
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
