import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atom/counter'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <isEven />
      </RecoilRoot>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom)
  return <div>
    <button onClick={() => setCount((c) => c + 2)}>Increase</button>
    <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>
}

function isEven() {
  const even = useRecoilValue(evenSelector)
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App