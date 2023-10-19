function loadingDataFetch(url) {
    return fetch(url).then((response) => response.json())
};

loadingDataFetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => console.log(data));