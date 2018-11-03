function bubbleSort(nums) {
    for (let j = 0; j < nums.length - 1;) {
        if (nums[j] > nums[j + 1]) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            j = j - 1;
            if (j < 0) {
                j = 0;
            }
        } else { j++; }
    }
    return nums;
}

nums = [6, 7, 2];
console.log(bubbleSort(nums));