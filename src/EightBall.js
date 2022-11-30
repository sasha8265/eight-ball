import React, { useState } from "react";
import "./EightBall.css"
import { getRandom } from './helpers'
import answers from "./answers"

const EightBall = (props) => {
    // function getRandom() {
    //     return Math.floor(Math.random() * answers.length);
    // }
    const askQuestion = () => {
        
        let response = answers[getRandom()];
        let answer = Object.values(response)[0];
        let color = Object.values(response)[1];

        console.log(response);
        console.log(answer);
        console.log(color);

        setQuestion(answer);
        setColor(color);
    }

    const [question, setQuestion] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    return (
        <div className="EightBall">
            <span onClick={askQuestion} className="EightBall-question">{ question }</span>
        </div>
    )
}


export default EightBall;