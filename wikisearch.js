//this serves as the interface that calls more complex functionality
function handleSubmit(e) {
  getResults(e);
}

//uses the query name to query search from wikipedia
function getResults(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=1&utf8=&format=json&srsearch=${query}`;

  //fetch data and put result into html
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      putResults(data.query.search);
    })
    .catch((e) => console.log(`ERROR : ${e}`));
}

function putResults(sResults) {
  const searchResults = document.querySelector(".results");
  searchResults.innerHTML = "";
  sResults.forEach((result) => {
    //create html link to put onto html
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    //include wikipedia into html, did this because I could custom format easier
    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="result">
      <h3 class="result-title">
        <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
      </h3>
      <span class="result-snippet">${result.snippet}</span><br>
      <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
    </div>`
    );
  });
}
