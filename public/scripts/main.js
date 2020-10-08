const searchButton = document.querySelector(".search-button");
const resultsContainer = document.querySelector(".results-container");

searchButton.addEventListener("click", () => {
  getRepos();
});

function getRepos() {
  const url = "https://api.github.com/repos/octocat/Hello-World";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
