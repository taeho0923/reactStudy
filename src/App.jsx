import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  const [count, setCount] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState(0)

  // function titleChange (){
  //   let copy = [...title];
  //   copy[0] = '여자코트추천'
  //   setTitle(copy) 
  // }

  return (
    <div className='App'>
      <div className='black'>
        <h4>blogList</h4>
        <button
          onClick={()=>{
            let copy = [...title];
            console.log(copy)
            copy[0] = '여자코트추천' 
            setTitle(copy)
          }}
        >버튼</button>
      </div>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort()
        setTitle(copy);
      }}>
        정렬 버튼
      </button>
        {
          title.map((item, index) => (
            <div className="list" key={index}>
              <h4>{item} <span onClick={()=>{
                let copy = [...count];
                copy[index] = copy[index] + 1
                setCount(copy)
              }}>👍</span> {count[index]} <button onClick={()=>{
                setModal(!modal);
                setText(index)
              }}>버튼</button></h4>
              <p>2월 17일 발행</p>
            </div>
          ))
        }
      {
        modal == true ? <Modal text={text} title={title}/> : null
      }
    </div>

  )
}

const Modal = (props) => {
  return(
    <div className='popup'>
      <h4>{props.title[props.text]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App
