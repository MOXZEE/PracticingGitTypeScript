var twoSum = function (nums, target) {
    var counter = new Map();
    for (var i = 0; i < nums.length; i++) {
        var current = target - nums[i];
        if (!counter.has(current)) {
            counter[current] = nums[i];
        }
        else {
            return [counter[current], nums[i]];
        }
    }
    return [];
};
var nums = new Array(1, 4, 7, 3, 7, 5);
var target = 7;
console.log(twoSum(nums, target));
