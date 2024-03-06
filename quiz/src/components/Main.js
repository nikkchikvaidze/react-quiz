import Countdown from './Countdown';

function Main({ children }) {
  return (
    <div className="d-flex">
      {children}
      <Countdown />
    </div>
  );
}

export default Main;
