import React from 'react'
import "./Bot.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Logo from "../../assests/logo3.png";

const Bot = ({setVisible}) => {
return (
    <>
      <div className="chat">
        <div className="chat-title">
          <img src={Logo} alt="" />
          <h1>basys.ai chat</h1>
        </div>
        <div className="messages">
          <div className="messages-content">
            <p className="message1">Hi, How can I help you today?</p>
            <p className="message2">Does the patient have coverage for insulin</p>
            <p className="message1">Yes, the coverage includes: Insulin vials pens. Needles and syringes, Glucose monitoring supplies and Insulin pump supplies</p>
            <p className="message2">Thank you :)</p>
            <p className="message1">You're welcome! Let me Know if you have any other questions.</p>
          </div>
        </div>
        <form className="message-box" id="mymsg" method="#">
          <input type="text" id="MSG" name="MSG" className="message-input" placeholder="Type here..." />
          <i className="fas fa-microphone" id="start-record-btn"></i>
          <button type="button" onClick={()=>{setVisible(false)}} className="message-submit">
          <ArrowCircleRightIcon className="submit-icon"/>
          </button>
        </form>
        <h3 className="no-browser-support" hidden>Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>
      </div>
      <div className="bg"></div>
    </>
  )
}

export default Bot