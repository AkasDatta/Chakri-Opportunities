import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import happyImage from './image/smile.png';
import './Chart.css'

const data01 = [
  { name: "Assignment 1", value: 47 },
  { name: "Assignment 2", value: 52 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 58 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 60 }
];

const Charts = () => {
    return (
        <div className="container">
            <div>
                <PieChart width={1000} height={600}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data01}
                        cx={200}
                        cy={300}
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    ></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div className="pb-4">
                <h2>My average assignment marks: 57.13</h2>
                <p>Due to the outstanding contribution and teaching of programming hero God, the blessings of my parents as well as my own tireless work today I have achieved an assignment mark average of 57+. I hope this and the next assignment will also get the expected results. <img className="assignment-image" src={happyImage} alt=""/></p>
            </div>
        </div>
    );
};

export default Charts;