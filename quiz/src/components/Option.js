function Option({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="test">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option mb ${hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''} ${hasAnswered ? 'disabled' : ''}`}
          onClick={() => dispatch({ type: 'answer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
