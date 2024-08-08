import logo from './logo.svg';
import './App.css'
import BackgroundSVG from "./images/background-pattern-desktop.svg"
import IconSVG from "./images/icon-star.svg"
import PlusSVG from "./images/icon-plus.svg"
import MinusSVG from "./images/icon-minus.svg"
import mobileSVG from "./images/background-pattern-mobile.svg"
import React from 'react';

function App() {
  

  function handleClick1(){
    let faq1 = document.getElementById("faq1")
    let plus1 = document.querySelector(".plus1")
    let minus1 = document.querySelector(".minus1")
    
    if (faq1.classList.contains("faq1")){
      faq1.className = 'faq1__hide'
      plus1.style.display = 'flex'
      minus1.style.display = 'none'
    }

    else{
      faq1.className = 'faq1'
      plus1.style.display = 'none'
      minus1.style.display = 'flex'
    }
  }

  function handleClick2(){
    let faq2 = document.getElementById("faq2")
    let plus2 = document.querySelector(".plus2")
    let minus2 = document.querySelector(".minus2")
    
    if (faq2.classList.contains("faq2")){
      faq2.className = 'faq2__hide'
      plus2.style.display = 'flex'
      minus2.style.display = 'none'
    }

    else{
      faq2.className = 'faq2'
      plus2.style.display = 'none'
      minus2.style.display = 'flex'
    }
  }

  function handleClick3(){
    let faq3 = document.getElementById("faq3")
    let plus3 = document.querySelector(".plus3")
    let minus3 = document.querySelector(".minus3")
    
    if (faq3.classList.contains("faq3")){
      faq3.className = 'faq3__hide'
      plus3.style.display = 'flex'
      minus3.style.display = 'none'
    }

    else{
      faq3.className = 'faq3'
      plus3.style.display = 'none'
      minus3.style.display = 'flex'
    }
  }

  function handleClick4(){
    let faq4 = document.getElementById("faq4")
    let plus4 = document.querySelector(".plus4")
    let minus4 = document.querySelector(".minus4")
    
    if (faq4.classList.contains("faq4")){
      faq4.className = 'faq4__hide'
      plus4.style.display = 'flex'
      minus4.style.display = 'none'
    }

    else{
      faq4.className = 'faq4'
      plus4.style.display = 'none'
      minus4.style.display = 'flex'
    }
  }
  
  return (
<div className="container__main__up">
      <img className="backround__img" src={BackgroundSVG} alt=""/>
      <img className='mobile__img' src={mobileSVG} alt=""/>
  <div className="container__main">
    <div className="align__icon">
      <img src={IconSVG} alt="" width= "50px"/>
        <h1>FAQs</h1>
    </div>
      <button className="container__faq1" onClick={handleClick1}>
        <div className='align__btns'>
          <h2>What is Frontend Mentor, and how will it help me?</h2>
            <img className="plus1" src={PlusSVG} alt="" width= "25px"/>
            <img className="minus1" src={MinusSVG} alt="" width= "25px"/>
        </div>
              <p className='faq1' id="faq1">Frontend Mentor offers realistic coding challenges to help developers improve their 
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
              all levels and ideal for portfolio building.</p>
      </button>
      <hr/>
      <button className="container__faq2" onClick={handleClick2}>
        <div className='align__btns'>
          <h2>Is Frontend Mentor free?</h2>
            <img className="plus2" src={PlusSVG} alt="" width= "25px"/>
            <img className="minus2" src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className='faq2' id="faq2">Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels.</p>
      </button>
      <hr/>
      <button className="container__faq3" onClick={handleClick3}>
        <div className='align__btns'>
          <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <img className="plus3" src={PlusSVG} alt="" width= "25px"/>
            <img className="minus3" src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className='faq3' id="faq3">Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!</p>
      </button>
      <hr/>
      <button className="container__faq4" onClick={handleClick4}>
        <div className='align__btns'>
          <h2>How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
            <img className="plus4" src={PlusSVG} alt="" width= "25px"/>
            <img className="minus4" src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className='faq4' id="faq4">The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members.</p>
      </button>
      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://spectacular-fenglisu-130f07.netlify.app/">Alan Hackbartt</a>.
      </div>
  </div>
      
      </div>
  );
} 

export default App;

