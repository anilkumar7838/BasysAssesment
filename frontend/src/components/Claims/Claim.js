import React from 'react'
import "./Claim.css";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Doctor from "../../assests/doctor.avif";
import { useNavigate } from "react-router-dom";

const Claim = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="claim-container">
                <div className="claims-block">
                    <div className="claim-section1">
                        <div className="claim-section1-block1">
                            <div className="claim-sec1">
                                <ContentPasteSearchIcon className='claim-sec1-icon' />
                            </div>
                            <div className="claim-sec2">
                                <div className="claim-sec2-details">
                                    <p><b id="claim1">Claim Id</b>200003</p>
                                    <p><b id="claim2">Date of service</b>1/10/2023</p>
                                    <p ><b id="claim3">Status</b>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div className="claim-block2">
                            <div className="claim-block claim-block1">
                                <div className="claim-above_text">
                                    <AccountCircleIcon className="claim-block1_icon" />
                                    <div className="claim-side_text">
                                        <h2>Linda Harris</h2>
                                        <p>11/09/1945(76 yrs), F</p>
                                        <h4>Non-Smoker</h4>
                                    </div>
                                </div>
                                <div className="claim-below_text">
                                    <div className="b">
                                        <p>EMPI/MRN</p>
                                        <p>P078645</p>
                                    </div>
                                    <div className="claim-b">
                                        <p>Phone</p>
                                        <p>512-265-4081</p>
                                    </div>
                                    <div className="claim-b">
                                        <p>PCP</p>
                                        <p>Dr. Karen Carter</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="claim-block3">
                            <div className="claim-block3-left">
                                <h2>Dr. Roger Lenon</h2>
                                <p>MD, NPI 43212</p>
                                <p>Holtzman Medical Group</p>
                                <p>Contact No. 2380181221</p>
                            </div>
                            <div className="claim-block3-right">
                                <img src={Doctor} alt="#" />
                            </div>

                        </div>

                        <div className="claim-block4">
                            <h3>Prior Authorization</h3>
                            <p>RID: 200003</p>
                            <p>AuthID: 63c8cef16328c39de555111f</p>
                            <p>Services Requested:</p>
                            <p>- CPT 92227 x 2 visits Annually</p>
                        </div>

                    </div>
                    <div className="claim-section2">
                        <div className="claim-section2-block1">
                            <h3>Primary Payer</h3>
                            <p>VETERANS ADMINISTRATION - PRESCOTT VA (199311) 123456789 (Contracts)</p>
                            <p><b>EDI</b>- 199311</p>
                            <p><b>Assignment</b>- Not Assigned</p>
                            <p><b>Force Drop to Paper</b>- No</p>
                        </div>

                        <div className="claim-section2-block2">
                            <h3>Secondary Payer</h3>
                            <p>Humana (Medicare Replacement/Advantage -PPO)(447006) 123456789</p>
                            <p><b>EDI</b>- 47006</p>
                            <p><b>Assignment</b>- Not Assigned</p>
                            <p><b>Force Drop to Paper</b>- No</p>
                        </div>

                        <div className="claim-section2-block3">
                            <div className="claim-block3-top">
                                <div className="claim-block3-top1">
                                    <h3>CPT</h3>
                                </div>
                                <div className="claim-block3-top2">
                                    <h3>Diagnosis</h3>
                                </div>
                                <div className="claim-block3-top3">
                                    <h3>Units</h3>
                                </div>
                                <div className="claim-block3-top4">
                                    <h3>Price</h3>
                                </div>
                            </div>
                            <div className="claim-block3-bottom">
                                <div className="claim-block3-top1">
                                    <p>92227</p>
                                </div>
                                <div className="claim-block3-top2">
                                    <p>Imaging of Retina for detection or monitoring of disease</p>
                                </div>
                                <div className="claim-block3-top3">
                                    <p>23</p>
                                </div>
                                <div className="claim-block3-top4">
                                    <p>$432</p>
                                </div>
                            </div>

                            <div className="claim-block3-last">
                                <b>Total:$864</b>
                            </div>

                        </div>

                        <div className="claim-section2-block4">
                            <h3>Note for Provider</h3>
                            <textarea placeholder='Text goes here...' id="textarea" rows="6"></textarea>
                        </div>

                        <div className="claim-section2-block5">
                            <form onSubmit={(e)=>{e.preventDefault();navigate("/")}}>
                                <input type="submit" value="Reject with note" id="claim-button1" />
                                <input type="submit" value="Approve" id="claim-button2" />
                            </form>
                        </div>

                    </div>
                </div>
                <div className="claim-close">
                    <b onClick={()=>{navigate("/")}}>X</b>
                </div>
            </div>
        </>
    )
}

export default Claim