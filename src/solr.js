


export const doGetSearch = (query) => {
  return new Promise(function(resolve, reject) {

    let url = 'http://ec2-18-207-71-197.compute-1.amazonaws.com:8983/solr/my_core/select?hl=on&hl.fragsize=0&hl.simple.pre=<span class="highlight">&hl.simple.post=</span>&q=' + encodeURI(query);

    fetch(url).then(function(response) {
      response.json().then(text => {
        var docArr = text.response.docs;
        var highlighting = text.highlighting;
        docArr.forEach(doc => {
          if(doc["id"] in highlighting){
            var highlights = highlighting[doc["id"]];
            for(var key in highlights) {
              doc[key] = highlights[key];
            }
          }
        });
        resolve(docArr);
      });
    });
  });
}

export const performSuggestionSearch = (query) => {
  return new Promise(function(resolve, reject) {
    let url = 'http://ec2-3-80-214-110.compute-1.amazonaws.com:8983/solr/my_core/suggest?suggest.q=' + encodeURI(query);

    fetch(url).then(function(response) {
      response.json().then(results => {
        let searchTerm = Object.keys(results.suggest.fuzzySuggester)[0];
        let suggestions = results.suggest.fuzzySuggester[searchTerm].suggestions;
        if(suggestions.length === 0)
          resolve([]);
        var suggestionArr = [];
        suggestions.forEach(suggestion => {
          suggestionArr.push(suggestion.term);
        });
        resolve(suggestionArr);
      });
    });
  });
}
