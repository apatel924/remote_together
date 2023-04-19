import {useContext} from 'react';
import { counterContext } from '../providers/CounterProvider';


export function Counter() {
  const {counter, increment, decrement, clear} = useContext(counterContext);

  return (
    <div>
      <h1>Page testing counter</h1>
      Counter: <span className="counter"> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}