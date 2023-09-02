function mergeSort(arr) {
    const len = arr.length;
    let tempArray = new Array(len);

    for (let blockSize = 1; blockSize < len; blockSize = blockSize * 2) {
        for (let start = 0; start < len; start = start + 2 * blockSize) {
            const mid = Math.min(start + blockSize, len);
            const end = Math.min(start + 2 * blockSize, len);
            merge(arr, tempArray, start, mid, end);
        }
        const temp = arr;
        arr = tempArray;
        tempArray = temp;
    }
    return arr;
}

function merge(arr, tempArray, start, mid, end) {
    let leftIndex = start;
    let rightIndex = mid;

    for (let i = start; i < end; i++) {
        if (leftIndex < mid && (rightIndex >= end || arr[leftIndex] <= arr[rightIndex])) {
            tempArray[i] = arr[leftIndex];
            leftIndex++;

        }
        else {
            tempArray[i] = arr[rightIndex];
            rightIndex++;
        }
    }
}

const array = [6, 3, 8, 5, 2, 7]
const sortedArray = mergeSort(array);
console.log(sortedArray);