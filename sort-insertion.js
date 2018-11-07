//insertion sort
const insertionSort = (numArray) => {
    const length = numArray.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j >= 0; j--) {
            if (numArray[j] < numArray[j - 1]) {
                [numArray[j - 1], numArray[j]] = [numArray[j], numArray[j - 1]]
            }
        }
    }
    return numArray;
};

const numArray = [4, 78, 2, 68, 8, 3, 8, 3];
console.log(insertionSort(numArray));