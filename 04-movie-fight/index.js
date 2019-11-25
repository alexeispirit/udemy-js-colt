const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "c6d3292d",
      s: searchTerm
    }
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async event => {
  const movies = await fetchData(event.target.value);

  const target = document.querySelector("#target");
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;
    target.appendChild(div);
  }
};

input.addEventListener("input", debounce(onInput));
