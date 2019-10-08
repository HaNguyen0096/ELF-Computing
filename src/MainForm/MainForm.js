import React, { Component } from 'react';
import './MainForm.css';
import FeatureList from '../FeatureList/FeatureList';

class MainForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureList 
          features={this.props.features} 
          selected={this.props.selected}
          handleFeatureChange={this.props.handleFeatureChange}/>
      </form>
    );
  }
}

export default MainForm;