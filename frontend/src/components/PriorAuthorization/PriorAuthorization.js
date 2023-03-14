import React from 'react'
import "./PriorAuthorization.css";
import Header from "../views/Header/Header";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
const PriorAuthorization = () => {
    const data = [
        {
            status:"Pending",
            RequestId:200005,
            Date:"1/24/2023",
            Medium:"Urgency",
            Services:[
                "-CPT 92227 x 2 visits Annually",
                "-CPT 99211 x 2 visits Annually",
            ],
            RequestBy:"Dr.Roger Lenon, MD",

        },
        {
            status:"Pending",
            RequestId:200004,
            Date:"1/19/2023",
            Medium:"Urgency",
            Services:[
                "-CPT 92227 x 2 visits Annually",
                "-CPT 99211 x 1 visit Annually",
            ],
            RequestBy:"Dr.Roger Lenon, MD",

        },
        {
            status:"Accepted",
            RequestId:200003,
            Date:"1/15/2023",
            Medium:"Urgency",
            Services:[
                "-CPT 92227 x 2 visits Annually",
            ],
            RequestBy:"Dr.Roger Lenon, MD",

        },
        {
            status:"Accepted",
            RequestId:200002,
            Date:"1/14/2023",
            Medium:"Urgency",
            Services:[
                "-CPT 99091 x 2 visits One time",
                "-CPT 99091 x 1 visit One time",
            ],
            RequestBy:"Dr.Roger Lenon, MD",

        },
    ]


  return (
    <>
    <Header props={"Welcome Bayer!"}/>
    <div className="auth-container">

    <div className="PriorAuth">
        <div className="auth-header">
            <h2>Manage Requests</h2>
        </div>
        <div className="block-pending">
            <h3>Pending</h3>
            <div className="auth-block">
            {data.map((item,i)=>(
                item.status==="Pending" &&
                <div className="auth-details" key={i}>
                        <div className="sec1"><h4>{item.status}</h4>
                        
                        {item.status==="Pending" &&<ContentPasteSearchIcon className='sec1-icon'/>}
                        {item.status==="Accepted" &&<AssignmentTurnedInOutlinedIcon className='sec1-icon'/>}
                        </div>
                        <div className="sec2">
                            <div className="sec2-details">
                                <b>RequestId : </b>{item.RequestId}
                                <br/>
                                <b>Date: </b>{item.Date}
                                <br/>
                                <b>Medium: </b>{item.Medium}
                            </div>
                        </div>
                        <div className="sec3">
                            <h4>Services</h4>
                            {item.Services.map((service,i)=>(
                                <p key={i}>{service}</p>
                                
                                ))}
                        </div>
                        <div className="sec4">
                            <h4>Requested By</h4>
                            <p>{item.RequestBy}</p>
                        </div>
                        <div className="sec-5">
                            {item.status==="Pending" && <button className='sec5-button'>Approve</button> }
                            <p>View Details</p>
                        </div>
                    </div>
                
                ))}

            </div>
            <h3>Accepted</h3>
            <div className="auth-block">
            {data.map((item,i)=>(
                item.status==="Accepted" &&
                    <div className="auth-details" key={i}>
                        <div className="sec1"><h4>{item.status}</h4>
                        {item.status==="Pending" &&<ContentPasteSearchIcon className='sec1-icon'/>}
                        {item.status==="Accepted" &&<AssignmentTurnedInOutlinedIcon className='sec1-icon'/>}
                        </div>
                        <div className="sec2">
                            <div className="sec2-details">
                                <b>RequestId : </b>{item.RequestId}
                                <br/>
                                <b>Date: </b>{item.Date}
                                <br/>
                                <b>Medium: </b>{item.Medium}
                            </div>
                        </div>
                        <div className="sec3">
                            <h4>Services</h4>
                            {item.Services.map((service,i)=>(
                                <p key={i}>{service}</p>
                                
                                ))}
                        </div>
                        <div className="sec4">
                            <h4>Requested By</h4>
                            <p>{item.RequestBy}</p>
                        </div>
                        <div className="sec-5">
                            {item.status==="Pending" && <button className='sec5-button'>Approve</button> }
                            <p>View Details</p>
                            
                        </div>
                    </div>
                
                ))}

            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default PriorAuthorization