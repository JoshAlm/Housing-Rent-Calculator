import React from 'react';
import {calcQuestions} from '../Questions';

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
        case("number"):
            input = <input className="rounded pl-2" onChange={props.inputHandler} id={count} value={props.results[count]} type="number" min="0" />
            break;
        case("dollarDisabled"):
            input = <input readOnly className="rounded rent-calc-money-input pl-2" onChange={props.inputHandler} id={count} value={props.results[count]} type="number" min="0" />
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

export default function RentCalculator2(props){ 


    let questions = [calcQuestions['numDependents'], calcQuestions['disabledDeduction'], calcQuestions['childcareExp'], 
                    calcQuestions['attendExp'], calcQuestions['elderlyExp']]

    let results = [calcQuestions['medExp'], calcQuestions['perAGI'], calcQuestions['medDeduction']]
    let count = -1;

    return(
        <div className="rent-calc-container" align="center">
            <div className="rent-calc-foreground">
                <h1>Monetary Allowances</h1>

                <div className="rent-calc-container-content">
                    {questions.map(question => {
                                count++
                                return (<div className="rent-calc-question-container" key={count}>
                                    <div className="rent-calc-question-label-description">
                                        <p className="rent-calc-label">{count + 12}. {question.label}</p>
                                        <p className="rent-calc-description">{question.description}</p>
                                    </div>
                                    <div>
                                    {questionType(props, question.type, count)}
                                    </div>
                                </div>)
                    })}
                    <div className="rent-calc-question-container mt-3 mb-4">
                        <p 
                            className="rent-calc-label">{"17. "+results[0].label+"\t"}
                            <button type="button" className="rent-calc-help" data-toggle="popover" title="Calculation Explanation" data-content={results[0].notes} >?</button>
                        </p>
                        <div className="rent-calc-money-container">
                            <input className="rounded rent-calc-money-input" value={props.total1} readOnly/>  
                        </div>      
                    </div>
                    <div  className="rent-calc-question-container mb-4">
                        <p 
                            className="rent-calc-label">{"18. "+results[1].label+"\t"}
                            <button type="button" className="rent-calc-help" data-toggle="popover" title="Calculation Explanation" data-content={results[1].notes} >?</button>
                        </p>
                        <div className="rent-calc-money-container">
                            <input className="rounded rent-calc-money-input" value={props.total2} readOnly/>
                        </div>
                    </div>
                    <div  className="rent-calc-question-container mb-4">
                        <p 
                            className="rent-calc-label">{"19. "+results[2].label+"\t"}
                            <button type="button" className="rent-calc-help" data-toggle="popover" title="Calculation Explanation" data-content={results[2].notes} >?</button>
                        </p>
                        <div className="rent-calc-money-container">
                            <input className="rounded rent-calc-money-input" value={props.total3 > 0 ? props.total3 : 0} readOnly/>
                        </div>
                    </div>

                </div> 
            </div>
        </div>    
    )  
}

