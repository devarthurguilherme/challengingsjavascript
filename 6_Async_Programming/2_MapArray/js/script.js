const arrTest = [2, 3, 4];
/*const arrMult = arrTest.map(multiplyTwo);

function multiplyTwo(n) {
    return n * 2
}

function mapArray(valuesArray, callbackTransform) {
    return valuesArray.map(callbackTransform);
};

console.log(mapArray(arrTest, multiplyTwo));
*/
function mapArray(valuesArray, callbackTransform) {
    const result = [];

    for(const each of valuesArray) {
        result.push(callbackTransform(each));
    };

    return result;
};


console.log(mapArray(arrTest, (n) => n * 2))
