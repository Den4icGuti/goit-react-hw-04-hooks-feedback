//  import React, { Component } from "react";
import FeedbackOptions from "./Feedback-App/Feedback/FeddbackOption";
import Title from "./Feedback-App/Title/Title";
import Notification from "./Feedback-App/Notifaction/Notification";
import Statistics from "./Feedback-App/Statistics/Statistics";
import styles from '../components/Feedback-App/styles/Feedback.module.css';
 import { useState } from 'react';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onHandleGoodIncrement = (onClickBtn) => { 
    if (onClickBtn === 'good') { 
        setGood(prevGood => prevGood + 1)
    }
    if (onClickBtn === 'neutral') { 
      setNeutral(prevNeutural => prevNeutural + 1)
    }
    if (onClickBtn === 'bad') { 
      setBad(prevBad => prevBad + 1)
    }
  }
  
   const onTotalCount = (mainRes) => {
     mainRes = good + neutral + bad;
     return mainRes;
  }

  // const countPositiveFeedbackPercentage = () => {
  //    if (onTotalCount() === 0) {
  //      return 0;
  //  }
  //    return  Math.round( 100 / (onTotalCount() / good))
  //  }

  const options = ['good', 'neutral','bad'];
  return (
      <div className={styles.box}>
        <Title title={'Please leave feedback'}/>
        <FeedbackOptions onHandle={onHandleGoodIncrement} listBtn={options}/>
        <Title title={'Statistics'}/>
        {onTotalCount() > 0 ?
        <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={onTotalCount}
           /> : <Notification message="There is no feedback" />}
       </div>
     )
  
}
export default App;