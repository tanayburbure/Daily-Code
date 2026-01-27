// import {useState , useEffect} from 'react';  
// import './App.css'

// function App() {
//   //conditional rendering ........
//   let [counterVisible,setCounterVisible] = useState(true);
//   useEffect(function(){
//     setInterval(function(){
//       setCounterVisible(c => !c)
//     },5000)
//   },[])
//   return (
//     <>
//       <div>
//         <h1>Hi there</h1>
//          {/* conditional rendering  */}
//         {counterVisible ? <Counter></Counter> :null}
//       </div> 
//     </>     
//   )
// }

// function Counter(){
//   const [count , setCount] = useState(0);
//   console.log("counter")

//   // function increaseCount(){
//   //   setCount(count + 1);
//   // }
//   // function decreaseCount(){
//   //   setCount(count - 1)
//   // }
//   // function resetCounter(){
//   //   setCount(0)
//   // }

//   useEffect(function(){
//     setInterval(function(){
//       // setCount(count => count + 1)
//       let clock = setCount(function(currentValue){
//         return currentValue + 1
//       })
//     } , 1000)

//     return function(){
//       console.log("on unmounting")
//       clearInterval(clock)
//     }

//     console.log("mounted")
//   },[])

//   return <div>
//     <h1 id='text'>{count}</h1>
//     {/* <button onClick={increaseCount} >Increase Count</button> */}
//     {/* <button onClick={decreaseCount}>Decrease Count</button>
//     <button onClick={resetCounter}>Reset Counter</button> */}
//   </div>
// }


// export default App


import {useEffect , useState} from  "react"

// Relearning CleanUp , useEffect , Learning about dependency array

export default function App(){
  const [count , setCount] = useState(0);

  function increase(){
    setCount(c => c + 1)
  }
  return <div>
    <Counter count={count} />
    <button onClick={increase}>Increase Counter</button>
  </div>
}

// mounting , re-rendering , unmounting

function Counter(props){
  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmount")
    }
  },[])

  useEffect(function(){
    console.log("Count has changed..")
  },[props.count])

  return <div>
    Counter {props.count}
  </div>
}
