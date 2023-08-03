import React, { useState } from 'react';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const values = { good, neutral, bad };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const handleLeaveFeedback = (e) => {
     switch (e) {
       case 'good':
         setGood(prev => (prev += 1));
         break;
       case 'bad':
         setBad(prev => (prev += 1));
         break;
       case 'neutral':
         setNeutral(prev => (prev += 1));
         break;
       default:
         return;
     }
    
  };


  return (
    <div className={css.container}>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={values}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statisticsk">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positiveFeedback={() => countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
//   };

//   handleLeaveFeedback = e => {
//     this.setState(prevState => ({
//       [e]: prevState[e] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const {
//       state,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//       handleLeaveFeedback,
//     } = this;
//     const total = countTotalFeedback();
//     return (
//       <div className={css.container}>
//         <Section title="Leave Feedback">
//           <FeedbackOptions
//             options={state}
//             onLeaveFeedback={handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statisticsk">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               totalFeedback={countTotalFeedback}
//               positiveFeedback={countPositiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
