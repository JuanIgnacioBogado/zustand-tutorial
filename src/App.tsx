import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useCounterStore } from './store/counterStore';

export const App = () => {
  const { count, title, posts, increment, getPosts, clearStore, multiply } = useCounterStore(state => state, shallow);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <button onClick={() => increment(10)}>Increment by 10</button>
      <button onClick={() => multiply(2)}>Multiply by 2</button>
      <button onClick={clearStore}>Clear State</button>

      <hr />

      {JSON.stringify(posts, null, 2)}
    </div>
  );
};
