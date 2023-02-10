import React from 'react';
import { Container } from './FeedbackCounter.styled';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };
  handleIncrement = evt => {
    switch (evt.target.textContent) {
      case 'Good':
        this.setState(
          prevState => {
            return {
              good: prevState.good + 1,
            };
          },
          () => {
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage();
          }
        );
        break;
      case 'Neutral':
        this.setState(
          prevState => {
            return {
              neutral: prevState.neutral + 1,
            };
          },
          () => {
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage();
          }
        );
        break;
      case 'Bad':
        this.setState(
          prevState => {
            return {
              bad: prevState.bad + 1,
            };
          },
          () => {
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage();
          }
        );
        break;

      default:
        break;
    }
  };

  countTotalFeedback = () => {
    this.setState(() => {
      return {
        total: this.state.good + this.state.neutral + this.state.bad,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(() => {
      return {
        positive: Math.floor(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100
        ),
      };
    });
  };
  render() {
    return (
      <Container>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleIncrement}
            />
          }
        />
        {this.state.total===0 ?<Section
          title={`Statistics`}
          children={
            <Notification message= {'There is no feedback'} />
          }
        /> : <Section
          title={`Statistics`}
          children={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positive}
            />
          }
        /> }
      </Container>
    );
  }
}

export default FeedbackCounter;
