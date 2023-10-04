function sayHello (){
    console.log("Hello!")
}

function timer(seconds, action) {
    const delaySeconds = seconds * 1000
    setTimeout(action, delaySeconds)
};

timer(3, sayHello)