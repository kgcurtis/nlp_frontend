import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';
import ResultThumbnail from './ResultThumbnail';

class ResultsList extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const results = this.props.results.map(result => (
      <ResultThumbnail { ...result } />
    ));

    return(
        <div style={{paddingTop:"40px"}}>
          { results }
        </div>
    );
  }
}

export default ResultsList;
