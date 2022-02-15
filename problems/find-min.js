const list = [12, 13, 1, 10, 34, 1];

function findMin(arr) {
    if (!arr || !arr.length) {
        throw Error('array is not valid');
    }
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    return min;
}

console.log(findMin(list));
// console.log(findMin([]));

//const list = [12, 13, 1, 10, 34, 1];
function find2mins(arr) {
    if (!arr || !arr.length || arr.length < 2) {
        throw Error('array is not valid');
    }

    // let min = arr[0] > arr[1] ? arr[1] : arr[0]; //12    1   1
    // let secondMin = arr[0] > arr[1] ? arr[0] : arr[1]; //13    12  10
    let [min, secondMin] = arr[0] > arr[1] ? [arr[1], arr[0]] : arr.slice(0, 2);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }

    return [min, secondMin];
}

console.log(find2mins(list));
