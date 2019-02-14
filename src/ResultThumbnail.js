import React, { Component } from 'react';
import { Card, CardBody } from 'mdbreact';

class ResultThumbnail extends Component {
  constructor(props){
    super(props);
    this.state = { ...props };
  }

  render() {

    const actors = this.state.actors.slice(0,5).map(actor => (
      <div key={actor} dangerouslySetInnerHTML={{ __html: actor }}></div>
    ));

    return(
        <div>
          <Card>
            <CardBody>
              <h4 dangerouslySetInnerHTML={{ __html: this.state.title }}></h4>
              <h6 dangerouslySetInnerHTML={{ __html:  this.state.tagline }}></h6>
              <h5 dangerouslySetInnerHTML={{ __html:  this.state.overview }}></h5>
              { actors }
          </CardBody>
          </Card>
        </div>
    )
  }
}

export default ResultThumbnail;
