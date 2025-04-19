import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {quickSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import {insertionSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import {heapSort} from '../sortingAlgorithms/sortingAlgorithms.js';

import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';




export default class SortingVisualizer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      array: [],
    };
    }

    componentDidMount(){
      this.resetArray();
    }

    resetArray(){
      const array = [];
      for(let i = 0; i < 100; i++){
        array.push(randomIntFromInterval(5,730));
      }
      this.setState({array});
    }

    mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
















quickSorthelper(){
  var items = this.state.array
  var arr = quickSort(items, 0, items.length-1);
  console.log(arr);
}




  //quickSort() {
 // We leave it as an exercise to the viewer of this code to implement this method.


 //console.log(this.quickSorthelper(this.state.array));


 //}



 //async quickSorthelper(ar) {
   //const ref = this;
 // We leave it as an exercise to the viewer of this code to implement this method.
 //const arrayBars = document.getElementsByClassName('array-bar');
 //if (ar.length < 2){

 //return ar;
 //}
// let pivot = ar[ar.length - 1];
 //arrayBars[pivot].style.backgroundColor ="pink";

// for (let i = 0; i < arrayBars.length; i++) {
//    if (i != pivot) {
  //    arrayBars[i].style.backgroundColor = "aqua";
  //  }
//  }



 //let left = [];
 //let right = [];


//do{


 //for (let i = 0; i < ar.length - 1; i++) {
 //await new Promise(resolve => setTimeout(() =>{


 //if (ar[i] < pivot) {
 //left.push(ar[i]);
//  arrayBars[i].style.height = left.push(ar[i]) * 1 + "px";
 //} else {
 //right.push(ar[i]);
 //arrayBars[i].style.height = right.push(ar[i]) * 1 + "px";

 //}

 //resolve();}, .00000000000001));
 //}




//}//while(false);


// return [...ref.quickSorthelper(left), pivot, ...ref.quickSorthelper(right)];


// }







 //for (let i = 0; i < arrayBars.length; i++) {
//    if (i != pivot) {
  //    arrayBars[i].style.backgroundColor = "aqua";
  //  }
//  }


//  arrayBars[left].style.backgroundColor = "lightgreen";
   //bars[leftIndex].innerText = items[leftIndex];
  //arrayBars[i].style.height = ar[i] * 1 + "px";
  //arrayBars[right].style.backgroundColor = "lightgreen";




  insertionSorthelper() {

    insertionSort(this.state.array);
  }


  heapSorthelper(){
    var items = this.state.array
    var arr = heapSort(items);
    console.log(arr);
  }

async  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    const arrayBars = document.getElementsByClassName('array-bar');
    const arr = this.state.array;
  let swapped = false;
  //  while(true){
    do{

        for(let i =0; i < arr.length; i++){
          await new Promise(resolve => setTimeout(() =>{
            let a = arr[i];
            let b =arr[i+1];
            if(a > b){

              for(let k = 0; k < arrayBars.length; k++){
                if(k !== a && k !== b){
                  arrayBars[k].style.backgroundColor = "pink";
                }
              }
                arr[i] = b;
                arr[i+1] = a;
                swapped = true;
                arrayBars[i].style.height = arr[i]*1+"px";

                arrayBars[i].style.backgroundColor = "aqua";
                arrayBars[i+1].style.height = arr[i+1]*1+"px";

                arrayBars[i+1].style.backgroundColor = "aqua";

            }resolve();
          }, .00000000000001));
        }

        //if (!swapped){
          //  break;
        //}
   }while(swapped);

  }


  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }


    render(){

      const {array} = this.state;

      return (
    <div className="array-container">
    {array.map((value, idx) => (
      <div
          className="array-bar"
          key={idx}
          style={{
            //backgroundColor: PRIMARY_COLOR,
            height: `${value}px`,
          }}> </div>
    ))}
    <div></div>
    <div class="reBut">
    <button onClick={() => this.resetArray()}> New Array</button> {/* button to reset array. */}</div>
    <div class="buttons_container">

    <button onClick={() => this.mergeSort()}>Merge Sort</button>{/* button to reset array. */}
        <button onClick={() => this.quickSorthelper()}>Quick Sort</button>{/* button to reset array. */}
        <button onClick={() => this.heapSorthelper()}>Heap Sort</button>{/* button to reset array. */}
    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>{/* button to reset array. */}
    <button onClick={() => this.insertionSorthelper()}>
          Insertion Sort
        </button>{/* button to reset array. */}
          </div>
    </div>
    );

    }















  }

  function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}











  function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
  }
