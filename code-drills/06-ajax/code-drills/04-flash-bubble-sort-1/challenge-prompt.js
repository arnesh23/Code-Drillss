// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================
for(var i = arr.length-1; i >= 0; i--){
    for(var j = arr.length-2; j >= 0; j--){
        if(arr[j] < arr[j+1]){
            swap(arr, j,j+1);
        }
    //console.log(arr);
    }
    console.log(arr);
}
return arr;
}
function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
// ============================================================


var testArray = [34, 23, 3, 76, 20, 84, 18, 9];


testArray = bubbleSort(testArray);
console.log(testArray);

