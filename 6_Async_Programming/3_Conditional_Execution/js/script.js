function conditionalExecution(check, execute, noExecute) {
    if(check()) {
        execute()
    } else {
        noExecute()
    };
};

function yes() {
    return true;
};

function no() {
    return false;
};

function executing() {
    console.log("executing ...");
};

function noExecuting() {
    console.log("...");
};

conditionalExecution(no, executing, noExecuting);