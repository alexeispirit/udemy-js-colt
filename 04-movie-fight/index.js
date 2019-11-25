const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "c6d3292d",
      i: "tt0848228"
    }
  });

  console.log(response.data);
};

fetchData();
