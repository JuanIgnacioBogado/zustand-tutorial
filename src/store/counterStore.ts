import { create } from 'zustand';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  getPosts: () => Promise<void>;
  clearStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  title: 'Some title',
  posts: [],
  increment: value => set(state => ({ count: state.count + value })),
  getPosts: async () => {
    const posts = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();

    set({ posts });
  },
  clearStore: () => set(state => ({ ...state, count: 0, posts: [] })),
  multiply: value => set({ count: get().count * value })
}));
