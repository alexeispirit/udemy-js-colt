const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "c6d3292d",
      s: "avengers"
    }
  });

  console.log(response.data);
};

fetchData();
