 import React, { Component } from 'react';
 import { Statistics } from './Statistics/Statistics';
 import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
 import { Section } from './Section/Section';
 import css from './Container.module.css';

 export class App extends Component {
   state = {
     good: 0,
     neutral: 0,
     bad: 0,
   };

 onLeaveFeedback = event => {
   const { name } = event.target;
   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
 };

 countTotalFeedback = () => {
   const arr = Object.values(this.state);
   return arr[0] + arr[1] + arr[2];
 };

 countPositiveFeedbackPercentage = () => {
   if (this.countTotalFeedback()) {
     return Math.round(
       (Number(this.state.good) / this.countTotalFeedback()) * 100
     );
   } else {
     return 0;
  }
 };

 render() {
   const total = this.countTotalFeedback();
   const positivePercentage = this.countPositiveFeedbackPercentage();
   const { good, neutral, bad } = this.state;
   return (
     <div className={css.container}>
       <Section title="Please leave feedback">
         <FeedbackOptions
           options={Object.keys(this.state)}
           onLeaveFeedback={this.onLeaveFeedback}
         />
      </Section>

      <Section title="Statistics">
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={total}
           positivePercentage={positivePercentage}
         />
       </Section>
       </div>
   );
 }
 }
