


export const doGetSearch = (query) => {
  return new Promise(function(resolve, reject) {

    let url = 'http://ec2-3-80-214-110.compute-1.amazonaws.com:8983/solr/my_core/select?q=' + encodeURI(query);

    fetch(url).then(function(response) {
      response.json().then(text => {
        resolve(text.response.docs);
      });
    });
  });
}
