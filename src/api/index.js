const fetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(res => res.slice(0, 5));

export default fetchData;
