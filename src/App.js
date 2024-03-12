import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 let [titleList, setTiltle] = useState(['강남 맛집', '사당 맛집', '여자 코트 추천']);
 let [likeList, setCnt] = useState([0,0,0]);
 let [modal, setModal] = useState(false);
 let [titleKey, setKey] = useState(0);
 let [content, setContent] = useState('');

 function likePlus(i){
  let copy = [...likeList];
  copy[i] = copy[i] + 1;
  setCnt(copy);
 }

 function modalset(i){
  modal == true ? setModal(false) : setModal(true);
 }

 function titleSet(){
  let copy = [...titleList];
  copy[0] = '역삼동 맛짐';
  setTiltle(copy);

 }

 function writePost(){
  let copy = [...titleList];
  copy = copy.concat(content);
  setTiltle(copy);

  let copyLike = [...likeList];
  copyLike = copyLike.concat(0);
  setCnt(copyLike);

 }

 function deletePost(i){
  let copy = [...titleList];
  copy.splice(i,1);
  
  setTiltle(copy);

 }


 return (
    <div className="App">
      <div className='blogName'>
         BLOG
      </div>
    {
      titleList.map(function(p,i){
        return(
          <div className='list' key={i} onClick={()=> {setModal(true); setKey(i) }} >
            <h4>{titleList[i]} <span onClick={(e) => {e.stopPropagation(); likePlus(i)} }>❤️</span>{likeList[i]}</h4>
            <p>22.3.4</p>
            <button onClick={()=>{deletePost(i)}}>delete</button>
          </div>)

      })
    }

    {
      modal == true ? <Modal titleList={titleList} titleKey = {titleKey}/> : null
    }

    <input onChange={(e)=> {setContent(e.target.value)}}></input>
    <button onClick={()=>{writePost()}}>write</button>

    
    </div>
  );

  function Modal(props){
    return(
      <div className='modal'>
        <h4>{props.titleList[props.titleKey]}</h4>
        <p>22.2.3</p>
        <p>content</p>
        <button onClick={()=>{titleSet()}}>modify</button>
      </div>
    )
  }



}

export default App;
