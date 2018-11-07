//merge sort
const mergeSort = nums => {
    const length = nums.length;
    if (length < 2) {
        return nums;
    }

    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return stitch(mergeSort(left), mergeSort(right));
};

const stitch = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(mergeSort(nums));