
import './App.css'
import BackgroundSVG from "./images/background-pattern-desktop.svg"
import IconSVG from "./images/icon-star.svg"
import PlusSVG from "./images/icon-plus.svg"
import MinusSVG from "./images/icon-minus.svg"
import mobileSVG from "./images/background-pattern-mobile.svg"
import React, { useState } from 'react';

function App() {
  let [plusone, setPlusone] = useState("plus__hide")
  let [plustwo, setPlustwo] = useState("plus__hide")
  let [plusthree, setPlusthree] = useState("plus__hide")
  let [plusfour, setPlusfour] = useState("plus__hide")
  let [minusone, setMinusone] = useState("minus__show")
  let [minustwo, setMinustwo] = useState("minus__show")
  let [minusthree, setMinusthree] = useState("minus__show")
  let [minusfour, setMinusfour] = useState("minus__show")

  let [change, setChange ] = useState("faq")
  let [reuse, setReuse] = useState("faq")
  let [reset, setReset] = useState("faq")
  let [insert, setInsert] = useState("faq")

  const toggleState = (state, setState, hideValue, showValue) => {
    setState(state === hideValue ? showValue : hideValue);
  }
    const handlePlusoneToggle = () => {
      toggleState(plusone, setPlusone, "plus__hide", "plus__show");
    };
    const handleMinusoneToggle = () => {
      toggleState(minusone, setMinusone, "minus__hide", "minus__show");
    };
    const handlePlustwoToggle = () => {
      toggleState(plustwo, setPlustwo, "plus__hide", "plus__show");
    };
    const handleMinustwoToggle = () => {
      toggleState(minustwo, setMinustwo, "minus__hide", "minus__show");
    };
    const handlePlusthreeToggle = () => {
      toggleState(plusthree, setPlusthree, "plus__hide", "plus__show");
    };
    const handleMinusthreeToggle = () => {
      toggleState(minusthree, setMinusthree, "minus__hide", "minus__show");
    };
    const handlePlusfourToggle = () => {
      toggleState(plusfour, setPlusfour, "plus__hide", "plus__show");
    };
    const handleMinusfourToggle = () => {
      toggleState(minusfour, setMinusfour, "minus__hide", "minus__show");
    };
    
    const handleChangeToggle = () => {
      toggleState(change, setChange, "faq", "faq__hide");
      handlePlusoneToggle();
      handleMinusoneToggle() 
    };

    const handleReuseToggle = () => {
      toggleState(reuse, setReuse, "faq", "faq__hide");
      handlePlustwoToggle()
      handleMinustwoToggle()
    };

    const handleResetToggle = () => {
      toggleState(reset, setReset, "faq", "faq__hide");
      handlePlusthreeToggle()
      handleMinusthreeToggle()
    };
  
    const handleInsertToggle = () => {
      toggleState(insert, setInsert, "faq", "faq__hide");
      handlePlusfourToggle()
      handleMinusfourToggle()
    };
  
  return (
<div className="container__main__up">
      <img className="backround__img" src={BackgroundSVG} alt=""/>
      <img className='mobile__img' src={mobileSVG} alt=""/>
  <div className="container__main">
    <div className="align__icon">
      <img src={IconSVG} alt="" width= "50px"/>
        <h1>FAQs</h1>
    </div>
      <button className="container__faq" onClick={handleChangeToggle}>
        <div className='align__btns'>
          <h2 >What is Frontend Mentor, and how will it help me?</h2>
            <img className={plusone} src={PlusSVG} alt="" width= "25px"/>
            <img className={minusone} src={MinusSVG} alt="" width= "25px"/>
        </div>
              <p class={change} id={change}>Frontend Mentor offers realistic coding challenges to help developers improve their 
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
              all levels and ideal for portfolio building.</p>
      </button>
      <hr/>
      <button className="container__faq" onClick={handleReuseToggle}>
        <div className='align__btns'>
          <h2 className='padd__icon'>Is Frontend Mentor free?</h2>
            <img className={plustwo} src={PlusSVG} alt="" width= "25px"/>
            <img className={minustwo} src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className={reuse} id={reuse}>Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels.</p>
      </button>
      <hr/>
      <button className="container__faq" onClick={handleResetToggle}>
        <div className='align__btns'>
          <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <img className={plusthree} src={PlusSVG} alt="" width= "25px"/>
            <img className={minusthree} src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className={reset} id={reset}>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!</p>
      </button>
      <hr/>
      <button className="container__faq" onClick={handleInsertToggle}>
        <div className='align__btns'>
          <h2>How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
            <img className={plusfour} src={PlusSVG} alt="" width= "25px"/>
            <img className={minusfour} src={MinusSVG} alt="" width= "25px"/>
        </div>
          <p className={insert} id={insert}>The best place to get help is inside Frontend Mentor's Discord community. There's a help 
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

