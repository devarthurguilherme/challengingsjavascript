async function executeSequence(urls) {

    const dataArray = []

    for(const url of urls) {
       const data = await fetch(url).then((response) => response.json());

       dataArray.push(data);
    };

    return dataArray;
};

const urlsArray = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

executeSequence(urlsArray).then((dataArray) => console.log(dataArray));