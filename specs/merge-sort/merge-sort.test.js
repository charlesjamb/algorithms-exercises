/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// function merge(left, right) {
//   console.log(left, right)
//   // let preMerged = [];
//   // // entryLeft: [ 3, 5, 10 ], entryRight: [ 2, 8 ]
//   // console.log({ entryLeft: left, entryRight: right });

//   // for (let leftIndex = 0; leftIndex < left.length; leftIndex++) {
//   //   let leftElement = left[leftIndex];

//   //   for (let rightIndex = 0; rightIndex < right.length; rightIndex++) {
//   //     let rightElement = right[rightIndex];

//   //     if (leftElement <= rightElement) {
//   //       preMerged.push(leftElement);
//   //       // left.splice(leftIndex, 1);
//   //       continue;
//   //     } else if (rightElement < leftElement) {
//   //       preMerged.push(rightElement);
//   //       // right.splice(rightIndex, 1);
//   //     }
//   //   }
//   // }

//   // let merged = [];
//   // // left: [ 3, 10 ], right: [ 8 ], preMerged: [ 2, 5 ]
//   // console.log({ left, right, preMerged });
//   // if (left.length === 0) {
//   //   console.log("concat right");
//   //   merged = preMerged.concat(right);
//   // } else if (right.length === 0) {
//   //   console.log("concat left");
//   //   merged = preMerged.concat(left);
//   // }

//   // console.log({ merged });
//   // return merged;
// }

const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};

function mergeSort(nums) {
  // console.log({ nums });

  if (nums.length <= 1) return nums;

  let half = Math.ceil(nums.length / 2);
  let left = nums.slice(0, half);
  let right = nums.slice(half, nums.length);

  // console.log({ left, right });

  let mergedLeft = mergeSort(left);
  let mergedRight = mergeSort(right);

  // console.log({ mergedLeft, mergedRight });

  return merge(mergedLeft, mergedRight);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  console.log({ ans });
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
