
const twoSum = (nums: number[], target: number): number[] => {
  let counter = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = target - nums[i];

    if (!counter.has(current)) {
      counter[current] = nums[i];
    } else {
      return [counter[current], nums[i]];
    }
  }

  return []
  };




let nums: number[] = new Array(1, 4, 7, 3, 7, 5);
let target: number = 7;
console.log(twoSum(nums, target));