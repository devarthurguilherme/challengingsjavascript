function apiSimulator(result, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, (delay * 1000));
    });
};

apiSimulator("Hello World!", 3).then(result => console.log(result));