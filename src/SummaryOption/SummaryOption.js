import React, { Component } from 'react';
import './SummaryOption.css';
import TotalCost from '../TotalCost/TotalCost'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class SummaryOption extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
          return (
              <div className='ss'>
                  {summary}
                  <TotalCost selected={this.props.selected}/>
              </div>
          )
    }
}
export default SummaryOption;