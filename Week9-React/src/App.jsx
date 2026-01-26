import {useState , useEffect} from 'react';  
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Hi there</h1>
        <Counter></Counter>
      </div> 
    </>     
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  console.log("counter")

  // function increaseCount(){
  //   setCount(count + 1);
  // }
  // function decreaseCount(){
  //   setCount(count - 1)
  // }
  // function resetCounter(){
  //   setCount(0)
  // }

  useEffect(function(){
    setInterval(function(){
      // setCount(count => count + 1)
      setCount(function(currentValue){
        return currentValue + 1
      })
    } , 1000)
    console.log("mounted")
  },[])

  return <div>
    <h1 id='text'>{count}</h1>
    {/* <button onClick={increaseCount} >Increase Count</button> */}
    {/* <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCounter}>Reset Counter</button> */}
  </div>
}


export default App
