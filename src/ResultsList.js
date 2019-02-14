import React, { Component } from 'react';
import ResultThumbnail from './ResultThumbnail';

class ResultsList extends Component {
  render() {
    const results = this.props.results.map(result => (
      <ResultThumbnail key={result.title} { ...result } />
    ));

    return(
        <div style={{paddingTop:"40px"}}>
          { results }
        </div>
    );
  }
}

export default ResultsList;
