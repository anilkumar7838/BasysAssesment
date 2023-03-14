// import { useEffect, useRef } from 'react';
import Header from '../views/Header/Header';
// import Sidebar from '../views/sidebar/sidebar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import HSBar from "react-horizontal-stacked-bar-chart";
import { PercentProgress,RadialChart } from '../Chart';
import "./scorecard.css";



const Item = styled(Paper)(({ theme, alignment = "center" }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: "#222b39",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position:"relative"
}));

const getData = () => {
    let clinical_risk = [parseInt(10000 + Math.random() * 10000), parseInt(10000 + Math.random() * 10000), parseInt(10000 + Math.random() * 10000)];
    let crs = clinical_risk.reduce((a, b) => a + b, 0);
    let social_risk = [parseInt(10000 + Math.random() * 10000), parseInt(10000 + Math.random() * 10000), parseInt(10000 + Math.random() * 10000)];
    let srs = social_risk.reduce((a, b) => a + b, 0);
    return {
        "patient_count": 30000 + parseInt(Math.random() * 20000),
        "patient_count_change": (Math.random() * 10).toFixed(2),
        "clinical_risk": clinical_risk,
        "clinical_risk_pct": clinical_risk.map((val) => { return ((val / crs) * 100).toFixed(1) }),
        "social_risk": social_risk,
        "social_risk_pct": social_risk.map((val) => { return ((val / srs) * 100).toFixed(1) }),
        "colors": ["#222b39", "#215494", "#d7dcf3"],
        "colors_value": ["High", "Medium", "Low"],
        "basys_score": (Math.random() * 100).toFixed(1),
        "basys_score_change": (Math.random() * 10).toFixed(2),
        "readmission": (Math.random() * 100).toFixed(1),
        "readmission_change": (Math.random() * 10).toFixed(2),
        "ip_visits": parseInt(10 + Math.random() * 10),
        "ip_visits_change": (Math.random() * 10).toFixed(2),
        "ip_unavoidable": (Math.random() * 100).toFixed(1),
        "risk_score": parseInt(Math.random() * 100),
        "risk_score_change": (Math.random() * 10).toFixed(2),
        "hcc_gap": (Math.random() * 100).toFixed(1),
        "hcc_gap_change": (Math.random() * 10).toFixed(2),
        "ED_visits": parseInt(100 + Math.random() * 1000),
        "ED_visits_change": (Math.random() * 10).toFixed(2),
        "ED_unavoidable": parseInt(100 + Math.random() * 500),

    }
}

const ScoreCard = (props) => {
    const data = getData();
    return (
        <>
            <Header props={"Welcome Mervin!"}/>
            <div className="score-card">
                <Box sx={{ flexGrow: 1 }} p={1}>
                    <Grid container spacing={2} alignItems="stretch">
                        <Grid item xs={12} id="score_card_title">
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <h2>Scorecard</h2>
                                <Stack direction="row" spacing={2}>
                                    <TextField
                                        label="Start Date"
                                        type="date"
                                        defaultValue="2017-06-01"
                                    />
                                    <TextField
                                        label="End Date"
                                        type="date"
                                        defaultValue="2017-07-01"
                                    />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} id="score_card_top">
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                justifyContent="center"
                                alignItems="stretch"
                                >
                                <Grid item xs={12} md={3}>
                                    <Item style={{borderRadius:"0px"}}>
                                        <h2>Patient Count</h2>
                                        <h1>{data.patient_count.toLocaleString()}</h1>
                                        <p>↑ {data.patient_count_change}% from september</p>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Item style={{borderRadius:"0px"}}>
                                        <p>Clinical Risk</p>
                                        <HSBar showTextUp data={data.clinical_risk.map((val, idx) => {
                                            return { value: val, color: data.colors[idx], description: data.clinical_risk_pct[idx] + "%" }
                                        })} />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Item style={{borderRadius:"0px"}}>
                                        <p>Social Risk</p>
                                        <HSBar showTextUp data={data.social_risk.map((val, idx) => {
                                            return { value: val, color: data.colors[idx], description: data.social_risk_pct[idx] + "%" }
                                        })} />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <Item style={{borderRadius:"0px"}}>
                                        <ul style={{ textAlign: "left", fontSize: "10px" }}>
                                            {data.colors.map((val, idx) => {
                                                return (
                                                    <div key={val}>
                                                        <span style={{ backgroundColor: val, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}></span> &nbsp;
                                                        <span>{data.colors_value[idx]}</span>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={4} id="score_card_left">
                            <Grid container spacing={2} style={{height:"105%"}}>
                                <Grid item xs={12}>
                                    <Item alignment="left">
                                        <h1><em style={{background:"#222b39",color:"#fff",padding:"0px 10px",display:"inline-block",borderRadius:"5px"}}>b</em> basys.ai score</h1>
                                        <p>Hospital Average</p>
                                        <h1>{data.basys_score}%</h1>
                                        <p>↑ {data.basys_score_change}% from september</p>
                                        <PercentProgress percent={data.basys_score} />
                                    </Item>
                                </Grid>
                                <Grid item xs={12}>
                                    <Item>
                                        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="stretch">
                                            <div>
                                                <h2>Risk adjusted pmpm</h2>
                                                <h1>${data.risk_score}</h1>
                                                <p>↑ {data.risk_score_change}% from september</p>
                                            </div>
                                            <Stack direction="row" spacing={1} justifyContent="space-around">
                                                <div className="vertical_block" style={{backgroundColor:data.colors[2]}}>October</div>
                                                <div className="vertical_block" style={{backgroundColor:data.colors[1]}}>November</div>
                                            </Stack>
                                        </Stack>

                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={8} id="score_card_middle">
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={5}>
                                            <Item alignment="left">
                                                <h2>30-day Readmissions</h2>
                                                <h1>{data.readmission}%</h1>
                                                <p>↑ {data.readmission_change}% from september</p>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Item>
                                                <Stack direction="row" spacing={2} justifyContent="space-between">
                                                    <div>
                                                        <h2>IP visits per 1000</h2>
                                                        <h1>{data.ip_visits}</h1>
                                                        <p>↑ {data.ip_visits_change}% from september</p>
                                                    </div>
                                                    <Stack direction="row" spacing={1} justifyContent="center">
                                                        <div>
                                                            <div className="score_card_block" style={{ backgroundColor: data.colors[0], marginBottom: "2px" }}></div>
                                                            <div className="score_card_block" style={{ backgroundColor: data.colors[1] }}></div>
                                                            <div className="score_card_block" style={{ backgroundColor: data.colors[1] }}></div>
                                                            <div className="score_card_block" style={{ backgroundColor: data.colors[2] }}></div>
                                                            <div className="score_card_block" style={{ backgroundColor: data.colors[2] }}></div>
                                                        </div>
                                                        <div>
                                                            <em> 17.1% </em> <br />
                                                            Potentially avoidable
                                                        </div>
                                                    </Stack>
                                                </Stack>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Item>
                                                <Grid container alignItems={"stretch"} style={{height:"100%"}}>
                                                    <Grid item xs={9}>
                                                        <h1>HCC Gap</h1>
                                                        <br />
                                                        <h3>Closure Rate</h3>
                                                        <h1>{data.hcc_gap}%</h1>
                                                        <p>↑ {data.hcc_gap_change}% from september</p>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <PercentProgress percent={data.hcc_gap} align="vertical" />
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Item>
                                                <h2>ED visits per 1000</h2>
                                                <RadialChart colors={data.colors}  visits={data.ED_visits} change={data.ED_visits_change} unavoidable={data.ED_unavoidable}/>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default ScoreCard;