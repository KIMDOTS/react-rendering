import { useState } from 'react'
import './App.css'

function App() {
  const [mood, setMood] = useState('Normal');

  return (
    <>
      <Face3 mood={mood}/>
      <div className={mood === "Happy" ? 'happy' : mood === "Normal" ? 'normal' : 'sad'}>Today's mood : {mood}</div>
      <div>
        <button onClick={()=> setMood("Happy")}>Happy</button>
        <button onClick={()=> setMood("Normal")}>Normal</button>
        <button onClick={()=> setMood("Sad")}>Sad</button>
      </div>
    </>
  )
}

// 1. if문으로 리턴하는 JSX문 바꿔주기
function Face({mood}){
  if(mood === "Happy") {
    return "😊";
  } else if (mood === "Normal") {
    return"😐";
  } else {
    return "😭";
  }
}


// 2. 삼항연산자 사용하기
function Face2({mood}){
  return (
    <>
      {mood === "Happy" ? <div>😊</div> : mood === "Normal" ? <div>😐</div> : <div>😭</div>}
    </>
    )
}
// 3. 논리연산자 (true일때 노출시키고 false일때는 아무것도 노출하지 않음)
function Face3({mood}){
  return (
    <>
      {mood === "Happy" && <div>😊</div>}
      {mood === "Normal" && <div>😐</div>}
      {mood === "Sad" && <div>😭</div>}
    </>
  )
}

export default App
