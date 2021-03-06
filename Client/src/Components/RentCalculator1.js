import React from 'react';
import {calcQuestions} from '../Questions';

import '../Styles/Calculator.css';

function questionType(props, type, count){
    let input
    switch(type){
        case("radio"):
            input = <div style={{display: 'flex'}}>
                        <input className="mr-1 mt-1" type="radio" id={count} name={count} onChange={props.inputHandler} checked={props.results[count] === "Yes" ? true : false}  value="Yes" />
                        <label className="mr-3" htmlFor="Yes">Yes</label>
                        <input className="mr-1 mt-1" type="radio" id={count} name={count} onChange={props.inputHandler} checked={props.results[count] === "No" ? true : false} value="No" />
                        <label className="mr-4" htmlFor="No">No</label>
                    </div>
            break;
        case("date"):
            input = <input onChange={props.inputHandler} id={count} value={props.results[count]} type="date"  />
            break;
        default:
            input = 
                    <div className="rent-calc-money-container">
                        <input className="rounded rent-calc-money-input" onChange={props.inputHandler} id={count} value={props.results[count]} type="number" min="0" />
                    </div>
            break;
    }
    return input
}

export default function RentCalculator1(props){ 

    let questions = [calcQuestions['annualHouseholdWages'], calcQuestions['periodicPayment'], calcQuestions['unearnedIncome'], 
                    calcQuestions['receivedIncome'], calcQuestions['businessIncome'], calcQuestions['investments'], 
                    calcQuestions['armedForcesPay'], calcQuestions['publicAssistanceRecieved'], calcQuestions['welfareReliant']]

    let results = [calcQuestions['annualGrossIncome'], calcQuestions['monthlyGrossIncome']]
    let count = -1;

    return(
        
        <div className="rent-calc-container" align="center">
                {/* Here is where you add the contents of what will be displayed to screen */}
                {/* <button type = "button" onClick = { props.logOffHandler} style={{float : 'right', paddingRight : '5px'}}>Sign Out</button> */}        
                
                <div className="rent-calc-foreground">
                    <h1>Gross Household Income</h1>                    
                    <div className="rent-calc-container-content">
                    {questions.map(question => {
                                count++
                                return (<div className="rent-calc-question-container" key={count}>
                                    <div className="rent-calc-question-label-description">
                                        <p className="rent-calc-label">{count + 1}. {question.label}</p>
                                        <p className="rent-calc-description">{question.description}</p>
                                    </div>
                                    <div style={{diplay: 'flex', flexDirection: 'row'}} >
                                    {questionType(props, question.type, count)}
                                    </div>
                                </div>)
                    })}
                        <div className="rent-calc-question-container mt-3 mb-4">
                            <p 
                                className="rent-calc-label">{"10. "+results[0].label+"\t"}
                                <button type="button" className="rent-calc-help" data-toggle="popover" title="Calculation Explanation" data-content={results[0].notes} >?</button>
                            </p>
                            <div className="rent-calc-money-container">
                                <input className="rounded rent-calc-money-input" value={props.total1} readOnly/>
                            </div>
                        </div>
                        
                        <div  className="rent-calc-question-container">
                            <p 
                                className="rent-calc-label">{"11. "+results[1].label+"\t"}
                                <button type="button" className="rent-calc-help" data-toggle="popover" title="Calculation Explanation" data-content={results[1].notes} >?</button>
                            </p>
                            <div className="rent-calc-money-container">
                                <input className="rounded rent-calc-money-input" value={props.total2} readOnly/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </div>    
    )  
}