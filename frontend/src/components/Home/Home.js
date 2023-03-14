import React, { useState } from 'react'
import "./home.css"
import Header from '../views/Header/Header'
// import Sidebar from '../views/sidebar/sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Mars from "../../assests/mars.jpg";
import Bot from '../Chatbot/Bot';
import Logo from "../../assests/logo3.png"
import Logo1 from "../../assests/logo4.png"
import HSBar from "react-horizontal-stacked-bar-chart";

const Home = () => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="home_container">
        {/* <Sidebar/> */}
        <Header props={"Hi,Dr.Lennon!"} />
        <div className="primary">

          {/* --------------------------------------- */}
          <div className="section1">
            <div className="block block1">
              <div className="above_text">
                <AccountCircleIcon className="block1_icon" />
                <div className="side_text">
                  <h2>Linda Harris</h2>
                  <p>11/09/1945(76 yrs), F</p>
                  <h4>Non-Smoker</h4>
                </div>
              </div>
              <div className="below_text">
                <div className="b">
                  <p>EMPI/MRN</p>
                  <p>P078645</p>
                </div>
                <div className="b">
                  <p>Phone</p>
                  <p>512-265-4081</p>
                </div>
                <div className="b">
                  <p>PCP</p>
                  <p>Dr. Karen Carter</p>
                </div>
              </div>
              <a href="/">change</a>
            </div>

            <div className="block block4">
              <div className="block4-top">
                <img src={Mars} alt="#404" />
              </div>
              <h4>Current Period Diabetic Retinopathy Scan</h4>
              <div className="block4-bottom">
                <p id="id1">DR Present, moderate</p>
                <div className="block4-bottom-verify">
                  <VerifiedUserIcon className="block4-icon" />
                  <p id="2">Verified by Dr.Domingo Sanchez</p>
                </div>
                <a href="/"> View Recommendations</a>
              </div>
            </div>
          </div>

          {/* -------------------------------------- */}

          <div className="section2">
            <div className="block block2">
              <h2 style={{ color: "#07428f" }}>Medical History</h2>
              <div className="block2-bottom">

                <div className="block2-left">
                  <h2>Current Diagnoses</h2>
                  <div className="block2-details">
                    <p>-(110) Essential (primary) hypertension</p>
                    <p>-(E11.9) Type 2 diabetes mellitus without complications</p>
                    <p>-(E11.31) Type 2 diabetes mellitus with unspecified diabetic rentinopathy</p>
                  </div>
                </div>
                <div className="block2-right">
                  <ul className="block2-list">
                    <li>Diagnoses</li>
                    <li>Patent Risk Score</li>
                    <li>Social Determinants</li>
                    <li>Smoking Status</li>
                    <li>Allergy</li>
                    <li>Medical</li>
                    <li>Connect With Doctor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="block block5">
              <h2 style={{ color: "#07428f" }}>AGP Report</h2>
              <div className="block5-section1">
                <div className="block5-details1">
                  <h2>Time in</h2>
                  <h3>Target Range</h3>
                  <p>70-180 mg/dL</p>
                </div>
                <div className="block5-details2">
                  <h2>52%</h2>
                  <p>(12h 28min)</p>
                </div>
                <div className="block5-details3">
                  <p>Ranges</p>
                </div>
              </div>
              <div style={{ marginLeft: "-12px", width: 'calc(100% + 24px)' }}>
                <HSBar data={[{ value: 20, color: "red" }, { value: 30, color: "orange" }, { value: 50, color: "green" }]} />
              </div>
            </div>
          </div>

          {/* ---------------------------------------- */}
          <div className="section3">
            <div className="block block3">
              <div className="block3-top">
                <img src={Logo} alt="#" />
                <h2>basys.ai Recommendations</h2>
              </div>
              <div className="block3-mid">
                <div className="block3-mid-heading">
                  <h3>Potentially misses CPT codes</h3>
                </div>
                <div className="block3-mid-details">
                  <p>CPT-92227</p>
                  <p>CPT-99211</p>
                </div>

              </div>
              <div className="block3-bottom">
                <h3>Prescriptions</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus aperiam, vitae porro odit neque molestias quo nam ducimus consectetur, voluptatum placeat cumque minus sapiente ipsum doloremque, aut harum magni veritatis explicabo. Dolor, itaque eos vero temporibus assumenda distinctio illum quidem? Assumenda atque quaerat eos distinctio aliquid voluptatem dicta? Vel quas, assumenda a placeat libero, maiores ipsam laboriosam quaerat possimus consectetur natus molestias molestiae perferendis cupiditate quasi reprehenderit tempora fuga similique sit. Explicabo odit debitis ipsa incidunt assumenda id sit!</p>
              </div>

            </div>
          </div>

          {(visible ?
            <Bot setVisible={setVisible} /> :
            <div className="home-footer-bot">
              <img src={Logo1} alt="#" onClick={() => {
                setVisible(true);
              }} />
            </div>)}
        </div>
      </div>
    </>
  )
}

export default Home