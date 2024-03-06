import './App.scss';

import Main from './components/Main';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Option from './components/Option';
import Finish from './components/Finish';

import { useQuestion } from './context/QuestionProvider';

function App() {
  const {
    state: { status },
  } = useQuestion();

  return (
    <div>
      {status === 'init' && <Welcome />}
      {status === 'active' && (
        <Main>
          <Question />
          <Option />
        </Main>
      )}
      {(status === 'finish' || status === 'timeout') && <Finish />}
    </div>
  );
}

export default App;
