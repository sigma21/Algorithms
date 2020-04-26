// Title Case a Sentence
//
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also 
// capitalize connecting words like "the" and "of".

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(i => i[0].toUpperCase() + i.substring(1)
        ).join(' ');
}
titleCase("I'm a little tea pot");
//////////////////////////////////////////


// Slice and Splice

// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let arr2Copy = arr2.slice(0)

    arr1.slice(0)
        .reverse()
        .forEach(i => arr2Copy.splice(n, 0, i))
    return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//////////////////////////////////////////////


// Falsy Bouncer

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    return arr.filter(i => Boolean(i));
}
bouncer([7, "ate", "", false, 9]);
//////////////////////////////////////////


// Where do I Belong

// Return the lowest index at which a value (second argument) should be 
// inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
// because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 
// because once the array has been sorted it will look like 
// [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    arr.push(num)
    arr.sort((a, b) => a - b)

    return arr.indexOf(num);
}
getIndexToIns([1, 200, 3, 4], 50);
/////////////////////////////////////////


// Mutations

// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of 
// the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because 
// the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of 
// the letters in "line" are present in "Alien".

function mutation(arr) {
    let letters = arr[1].toLowerCase().split('')

    return letters.every(i => arr[0].toLowerCase().includes(i))
}
mutation(["hello", "he"]);
///////////////////////////////


