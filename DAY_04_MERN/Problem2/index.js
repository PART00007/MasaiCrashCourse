const numbers = [1, 2, 3, 4, 5];

// Using native map function
const doubledNumbersNative = numbers.map(num => num * 2);
console.log('Doubled Numbers (Using Native map):', doubledNumbersNative);

// Using custom map function
function customMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const doubledNumbersCustom = customMap(numbers, num => num * 2);
console.log('Doubled Numbers (Using Custom map):', doubledNumbersCustom);

const numbers = [1, 2, 3, 4, 5];

// Using native map function
const doubledNumbersNative = numbers.map(num => num * 2);
console.log('Doubled Numbers (Using Native map):', doubledNumbersNative);

// Using custom map function
function customMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const doubledNumbersCustom = customMap(numbers, num => num * 2);
console.log('Doubled Numbers (Using Custom map):', doubledNumbersCustom);

