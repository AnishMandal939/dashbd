import React,{useState} from 'react'
import {motion,AnimateSharedLayout} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
import {UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const Card = (props) => {
    // use state for framer motion compact and expanded card
    const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        {
            expanded?(
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
            ):
            <CompactCard param={props} setExpanded={()=> setExpanded(true)} />
        }
    </AnimateSharedLayout>
  )
}

// create compact card

function CompactCard({param, setExpanded}) {
    const Png = param.png;

    return (
        <motion.div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
            <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <pan>Last 24 hour</pan>
            </div>
            {/* <div className="compactCard_container">
                <div className="compactCard_container_title">
                    <h1>{props.title}</h1>
                </div>
                <div className="compactCard_container_bar">
                    <div className="compactCard_container_bar_value">
                        <h1>{props.barValue}</h1>
                    </div>
                    <div className="compactCard_container_bar_bar">
                        <div className="compactCard_container_bar_bar_bar" style={{backgroundColor:props.color}}></div>
                    </div>
                </div>
                <div className="compactCard_container_value">
                    <h1>{props.value}</h1>
                </div>
                <div className="compactCard_container_png">
                    <img src={props.png} alt=""/>
                </div>
            </div> */}
        </motion.div>
    )
}

// create expanded card
function ExpandedCard({param, setExpanded}) {
    const data={
        options:{
            chart:{
                type:"area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.15,
            },
            fill:{
                colors:['#fff'],
                type: "gradient",
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve: "smooth",
                colors: ["white"],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy HH:mm",
                },

            },
            grid:{
                show:true,
            },
            xaxis:{
                type: "datetime",
                categories:[
                    "2020-04-22T00:00:00.000Z",
                    "2020-04-22T01:00:00.000Z",
                    "2020-04-22T02:00:00.000Z",
                    "2020-04-22T03:00:00.000Z",
                    "2020-04-22T04:00:00.000Z",
                    "2020-04-22T05:00:00.000Z",
                    "2020-04-22T06:00:00.000Z",
                ],
            },
        }
    }
    return (
        <motion.div className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        layoutId='expandableCard'>
            <div style={{ alignSelf: ' flex-end', cursor: 'pointer', color: '#fff' }}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type="area" options={data.options} />
            </div>
            <span>Last 24 hours</span>
            
        </motion.div>
        
    )
}
export default Card