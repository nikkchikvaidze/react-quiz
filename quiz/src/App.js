import { useReducer } from 'react';

import './App.scss';
import data from './data/questions.json';
import Main from './components/Main';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Option from './components/Option';
import Finish from './components/Finish';

const { questions } = data;

const initialState = {
  questions,
  status: 'init',
  index: 0,
  answer: null,
  points: 0,
  correctAnswers: 0,
  timeout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'answer':
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        correctAnswers:
          question.correctOption === action.payload
            ? state.correctAnswers + 1
            : state.correctAnswers,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      return {
        ...state,
        status: 'finish',
      };
    case 'restart':
      return {
        ...initialState,
        status: 'active',
      };
    case 'timeout':
      return {
        ...state,
        status: 'timeout',
        timeout: action.payload,
      };
    default:
      console.log('No action dispatched');
  }
};

function App() {
  const [
    { questions, index, status, answer, points, correctAnswers, timeout },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <div>
      {status === 'init' && <Welcome dispatch={dispatch} />}
      {status === 'active' && (
        <Main dispatch={dispatch}>
          <Question question={questions[index]} />
          <Option
            question={questions[index]}
            answer={answer}
            index={index}
            totalQuestions={totalQuestions}
            points={points}
            totalPoints={totalPoints}
            questions={questions}
            dispatch={dispatch}
          />
        </Main>
      )}
      {(status === 'finish' || status === 'timeout') && (
        <Finish
          points={points}
          totalPoints={totalPoints}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          dispatch={dispatch}
          timeout={timeout}
        />
      )}
    </div>
  );
}

export default App;
