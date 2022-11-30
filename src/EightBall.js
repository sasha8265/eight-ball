import React, { useState } from "react";
import "./EightBall.css"
import { getRandom } from './helpers'
import answers from "./answers"

const EightBall = (props) => {
    function getRandom() {
        return Math.floor(Math.random() * answers.length);
    }
    const askQuestion = () => {
        let response = Object.values(answers[getRandom()])[0];
        console.log(response)
        setQuestion(response);
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