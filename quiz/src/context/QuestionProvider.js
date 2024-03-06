import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';

const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error('Context not available on that level of files');
  return context;
}

export { QuestionProvider, useQuestion };
