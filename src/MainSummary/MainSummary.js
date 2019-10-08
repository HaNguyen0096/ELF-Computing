import React, { Component } from 'react';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption';

class MainSummary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption 
            selected={this.props.selected}/>
      </section>
    );
  }
}

export default MainSummary;