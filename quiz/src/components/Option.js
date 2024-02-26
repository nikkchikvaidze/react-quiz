function Option({
  question,
  answer,
  index,
  totalQuestions,
  points,
  totalPoints,
  dispatch,
  questions,
}) {
  const hasAnswered = answer !== null;
  const isLastQuestion = index === questions.length - 1;
  return (
    <div className="question-title">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option mb ${hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''} ${hasAnswered ? 'disabled' : ''}`}
          onClick={() => dispatch({ type: 'answer', payload: index })}
        >
          {option}
        </button>
      ))}
      <div className="d-flex-progress mt">
        <div className="progress progress-container">
          Quiz Progress: {index + 1}/{totalQuestions}
        </div>
        {isLastQuestion ? (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: 'finish' })}
            className={`btn-next ${hasAnswered && 'btn-next-click'}`}
          >
            Finish
          </button>
        ) : (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: 'next' })}
            className={`btn-next ${hasAnswered && 'btn-next-click'}`}
          >
            Next
          </button>
        )}
      </div>
      <div className="t-left progress">
        Points: {points}/{totalPoints}
      </div>
    </div>
  );
}

export default Option;
