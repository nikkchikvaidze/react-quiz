import { useQuestion } from "../context/QuestionProvider";

function Question() {
  const {state: {questions, index}} = useQuestion();
  const {question} = questions[index];

  return (
    <div>
      <h3 className="question-title">{question}</h3>
    </div>
  );
}

export default Question;
