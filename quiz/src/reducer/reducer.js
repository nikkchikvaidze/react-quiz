import data from '../data/questions.json';
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

export { initialState, reducer };
