import Countdown from './Countdown';

function Main({ children, dispatch }) {
  return (
    <div className="d-flex">
      {children}
      <Countdown dispatch={dispatch} />
    </div>
  );
}

export default Main;
