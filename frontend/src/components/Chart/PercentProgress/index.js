import { useRef, useEffect } from "react";
import "./style.css";
const PercentProgressHorizontal = ({ percent}) => {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#222b39";
        ctx.beginPath();
        ctx.roundRect(0, 0, parseInt(canvas.width/100*percent), canvas.height,[0,15,15,0]);
        ctx.fill();
    }, [percent]);
    return (
        <div className="percent_progress_wrapper" ref={wrapperRef}>
            <div className="percent_progress_container">
                <canvas className="percent_progress" ref={canvasRef}></canvas>
            </div>
            <span>0%</span>
            <span style={{float:"right"}}>100%</span>
            <div className="pointer" style={{left:percent-3+"%"}}></div>
        </div>
    )
};
const PercentProgressVertical = ({ percent, align}) => {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#222b39";
        ctx.beginPath();
        ctx.roundRect(0, parseInt(canvas.height-canvas.height/100*percent), canvas.width, canvas.height,[0,15,15,0]);
        ctx.fill();
    }, [percent, align]);
    return (
        <div className="percent_progress_vertical_wrapper" ref={wrapperRef}>
            <div className="percent_progress_vertical_container">
                <canvas className="percent_progress" ref={canvasRef}></canvas>
            </div>
            <div className="percent_progress_vertical_labels">
                <span style={{float:"right"}}>100%</span>
                <span>0%</span>
                <div className="pointer_vertical" style={{top:(100-percent+3)+"%"}}></div>
            </div>
        </div>
    )
};

const PercentProgress = ({ percent, align}) => {
    if(align === "vertical"){
        return <PercentProgressVertical percent={percent}/>
    }
    return <PercentProgressHorizontal percent={percent}/>
};

export default PercentProgress;