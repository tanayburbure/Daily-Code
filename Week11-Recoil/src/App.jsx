import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atom/counter';

/// to use recoil we have to downgrade the version to 18...

function App() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  return (
    <div>
      <CurrentCounter/>
      <Increase/>
      <Decrease/>
    </div>
  )
}

function CurrentCounter(){
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Increase
      </button>
    </div>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>
        Decrease
      </button>
    </div>
  )
}

export default App;