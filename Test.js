
// const inputIntervals=[[1,2,3],[2,3,4,5,6],[8,9,10],[15,16,17,18]]

// const mergedIntervals = mergeIntervals(inputIntervals);

// function mergeIntervals(inputIntervals){

// const total=inputIntervals[0]+ inputIntervals[1]

// console.log(total)


// }

// mergeIntervals(inputIntervals)








// function mergeIntervals(intervals) {
    // Your code here
// }

// const inputIntervals = [
//     { start: 1, end: 3 },
//     { start: 2, end: 6 },
//     { start: 8, end: 10 },
//     { start: 15, end: 18 }
// ];

// const mergedIntervals = mergeIntervals(inputIntervals);
// console.log(mergedIntervals);

// ans :  [
//     { start: 1, end: 6 },
//     { start: 8, end: 10 },
//     { start: 15, end: 18 }
// ];


// Build a todo app, Use localstorage, Add todo, Delete Todo

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval.start <= lastMergedInterval.end) {
            lastMergedInterval.end = Math.max(lastMergedInterval.end, currentInterval.end);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

const inputIntervals = [
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 15, end: 18 }
];

const mergedIntervals = mergeIntervals(inputIntervals);
console.log(mergedIntervals);
