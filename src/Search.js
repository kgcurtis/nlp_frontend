import React, { Component } from 'react';
import { Container, MDBBtn, MDBIcon, Row, MDBInput, MDBCol, MDBFormInline } from "mdbreact";
import ResultsList from './ResultsList';
import * as solr from './solr';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e){
    e.preventDefault();
    this.setState({ results : [] });
    solr.doGetSearch(this.state.query).then(results => {
      this.setState({ results : results });
    });
  }

  render() {
    return(
      <Container>
        <Row>
          <MDBCol sm="12">
            <MDBInput onChange={event => {this.setState({query: event.target.value})}} hint="Search for a movie..." type="text" containerClass="mt-0" />
            <br/><MDBBtn size="sm" type="submit" onClick={this.onSubmit}><MDBIcon icon="search" />Search</MDBBtn>
         </MDBCol>
         </Row>
        <ResultsList results={this.state.results}/>
      </Container>
    );
  }
}

export default Search;
