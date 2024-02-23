import { useReducer } from 'react';

import './App.scss';
import data from './data/questions.json';
import Main from './components/Main';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Option from './components/Option';

const { questions } = data;

const initialState = {
  questions,
  status: 'init',
  index: 0,
  answer: null,
  points: 0,
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
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    default:
      console.log('No action dispatched');
  }
};

function App() {
  const [{ questions, index, status, answer, points }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const totalQuestions = questions.length

  return (
    <div>
      {status === 'init' && <Welcome dispatch={dispatch} />}
      {status === 'active' && (
        <Main>
          <Question question={questions[index]} />
          <Option
            question={questions[index]}
            answer={answer}
            index={index}
            totalQuestions={totalQuestions}
            points={points}
            dispatch={dispatch}
          />
        </Main>
      )}
    </div>
  );
}

export default App;
