import './App.css';
import { useEffect, useState } from 'react';
import CountResult from './CountResult';

functio App() {
  // 상태 선언
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`counter가 변경되었어요: ${counter}`);
  }, [counter]);

  return (
    <div>
      <h1>현재 카운트: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1 증가</button>
      <CountResult count={counter} />
    </div>
  );
}

export default App;