import {useRef,useEffect} from 'react';
import "./style.css";
const RadialChart = (props) => {
    const canvasRef = useRef(null);
    let data = [props.unavoidable,props.visits,parseInt(props.visits+props.visits*props.change/100)];
    let sum = data.reduce((a,b) => a+b,0);
    data = data.map(item => item/sum*100);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height;
        const radius = 80;
        let startAngle = Math.PI;
        let endAngle = 0;
        data.forEach((item,index) => {
            endAngle = startAngle + (Math.PI  * item/ 100);
            ctx.beginPath();
            ctx.moveTo(centerX,centerY);
            ctx.arc(centerX,centerY,radius,startAngle,endAngle);
            ctx.fillStyle = props.colors[index];
            ctx.fill();
            ctx.closePath();
            startAngle = endAngle;
        })
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX,centerY,radius-10,Math.PI,Math.PI*2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
    },[props])
    return(
        <>
        <div className='radial_wrapper'>
            <div className='radial_labels'>
                <h1>{props.visits}</h1>
                <p>{props.change}%↑ from Septemeber</p>
                <p style={{background:"#222b39",color:"#fff", display:"inline-block",padding:"2px"}}>{props.unavoidable} Unavoidable</p>
            </div>
        </div>
        <canvas ref={canvasRef} width={200} height={90} className="canvas" />
        </>
    )
}

export default RadialChart;