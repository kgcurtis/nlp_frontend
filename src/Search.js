import React, { Component } from 'react';
import { Container, Row, MDBCol } from "mdbreact";
import ResultsList from './ResultsList';
import * as solr from './solr';
import { AutoComplete }   from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      dataSource: [],
      inputValue: ''
    };
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);

  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue }, function() {
        self.performSearch();
      });
  }

  performSearch() {
    solr.performSuggestionSearch(this.state.inputValue).then(results => {
      this.setState({ dataSource : results });
    })
  }

  onNewRequest(request) {
    this.setState({ results : [] });
    solr.doGetSearch(request).then(results => {
      this.setState({ results : results });
    });
  }

  render() {
    return(
      <Container>
        <Row>
        <MDBCol sm="12">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <AutoComplete placeholder='Search for a movie...' id='autocomplete' fullWidth={true} onNewRequest={this.onNewRequest} filter={(searchText, key) => true} dataSource={this.state.dataSource} onUpdateInput={this.onUpdateInput}/>
          </MuiThemeProvider>
        </MDBCol>
         </Row>
        <ResultsList results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
