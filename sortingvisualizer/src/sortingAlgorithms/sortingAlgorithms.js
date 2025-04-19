export async function insertionSort(arr)
{   let arrayBars = document.getElementsByClassName('array-bar');
    let i, key, j;
    for (i = 1; i < arr.length; i++)
    {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];

            arrayBars[j + 1].style.height = arr[j + 1] * 1 + "px";
                 arrayBars[j + 1].style.backgroundColor = "pink";
                 //bars[j + 1].innerText = array[j + 1];
                 await sleep(10);

                 for (let k = 0; k < arrayBars.length; k++) {
                   if (k != j + 1) {
                     arrayBars[k].style.backgroundColor = "aqua";
                   }
                 }





            j = j - 1;
        }
        arr[j + 1] = key;
        arrayBars[j + 1].style.height = arr[j + 1] * 1 + "px";
    arrayBars[j + 1].style.backgroundColor = "lightgreen";
    //bars[j + 1].innerText = array[j + 1];
    await sleep(10);
    }

    for (let k = 0; k < arrayBars.length; k++) {
        arrayBars[k].style.backgroundColor = "aqua";
      }
      return arr;


}









function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


async function swap(items, leftIndex, rightIndex, arrayBars){


    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;



    arrayBars[leftIndex].style.height = items[leftIndex] * 1 + "px";
      arrayBars[leftIndex].style.backgroundColor = "lightgreen";
      //bars[leftIndex].innerText = items[leftIndex];
      arrayBars[rightIndex].style.height = items[rightIndex] * 1 + "px";
      arrayBars[rightIndex].style.backgroundColor = "lightgreen";
      //bars[rightIndex].innerText = items[rightIndex];


     await sleep(10);


}

async function partition(items, left, right) {
  let arrayBars = document.getElementsByClassName('array-bar');
let pivotIndex = Math.floor((right + left) / 2);
arrayBars[pivotIndex].style.backgroundColor = "pink";
for (let i = 0; i < arrayBars.length; i++) {
    if (i != pivotIndex) {
      arrayBars[i].style.backgroundColor = "aqua";
    }
  }
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
        await swap(items, i, j, arrayBars); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export async function quickSort(items, left, right) {
    var index;
    let arrayBars = document.getElementsByClassName('array-bar');
    if (items.length > 1) {
        index = await partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
          await quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
          await quickSort(items, index, right);
        }
    }

    for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "aqua";
      }


    return items;
}




export async function heapSort(array) {
  // Step 1: Build the heap
  let arrayBars = document.getElementsByClassName('array-bar');
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
  await heapify(array, array.length, i);
  }

  // Step 2: Extract elements from the heap one by one
  for (let i = array.length - 1; i > 0; i--) {
    // Move the current root (maximum value) to the end
    await swapHeap(array, 0, i, arrayBars);//[array[0], array[i]] = [array[i], array[0]];

    // Call heapify on the reduced heap
  await  heapify(array, i, 0);
  }

  for (let k = 0; k < arrayBars.length; k++) {
    arrayBars[k].style.backgroundColor = "aqua";
    await sleep(10);
  }

  return array;
}

 async function heapify(array, length, i) {
  let arrayBars = document.getElementsByClassName("array-bar");
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // If the left child is larger than the root
  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== i) {
    // Swap the root with the largest element
    await swapHeap(array, i, largest, arrayBars);//[array[i], array[largest]] = [array[largest], array[i]];

    // Recursively heapify the affected sub-tree
    await heapify(array, length, largest);
  }
}


async function swapHeap(array, i, j, bars) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  bars[i].style.height = array[i] * 1 + "px";
  bars[j].style.height = array[j] * 1 + "px";
  bars[i].style.backgroundColor = "red";
  bars[j].style.backgroundColor = "red";
  await sleep(10);

  for (let k = 0; k < bars.length; k++) {
    if (k != i && k != j) {
      bars[k].style.backgroundColor = "aqua";
    }
  }
  //bars[i].innerText = array[i];
  //bars[j].innerText = array[j];
  return array;
}






















export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}


function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
