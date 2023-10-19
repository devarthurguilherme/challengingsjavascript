function tryAgain(f, maxTry, interval) {
    return new Promise(async(resolve, reject) => {
        for(let tries = 1; tries <= maxTry; tries++) {
            try {
                const result = await f();
                return resolve(result)
            } catch(error) {
                if(tries === maxTry) {
                    return reject(error);
                };
                await new Promise((r) => setTimeout(r, interval))
            };
        };
    });
};

const fetchWithRetry = () => {
    fetch("https://jsonplaceholder.typicode.com/comments/1")
};

tryAgain(fetchWithRetry, 3, 1000)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Fail after 3 tries! " + error));