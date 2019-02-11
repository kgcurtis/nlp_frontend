import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'mdbreact';

class ResultThumbnail extends Component {
  constructor(props){
    super(props);
    this.state = { ...props };
  }

  render() {

    const actors = this.state.actors.slice(0,5).map(actor => (
      <div key={actor}>{actor}</div>
    ));

    return(
        <div>
          <Card>
            <CardBody>
              <h4>{ this.state.title }</h4>
              <h6>{ this.state.tagline }</h6>
              <h5>{ this.state.overview }</h5>
              { actors }
          </CardBody>
          </Card>
        </div>
    )
  }
}

export default ResultThumbnail;
