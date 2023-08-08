import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  countNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  countBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  //*** */

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((a, b) => a + b);

    console.log(total);
    return total;
  };

  //**** */
  countPositiveFeedbackPercentage = () => {
    // let positive = Math.round((this.countGood * 100) / this.countTotalFeedback);
    // console.log(positive);
    // return positive;
  };

  render() {
    const { total, positive } = this.props;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.countGood}>
          Good
        </button>
        <button type="button" onClick={this.countNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.countBad}>
          Bad
        </button>
        <ul>
          Statistics
          <li>Good:{this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li total={this.countTotalFeedback()}>Total:{total}</li>
          <li positive={this.countPositiveFeedbackPercentage()}>
            Positive feedback:{positive} %
          </li>
        </ul>
      </div>
    );
  }
}
