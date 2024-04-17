let arr = [5,1,2,3,4];

//selection sort
//time complexity : best - O(n^2) , average - O(n^2) ,worse - O(n^2)  
//space complexity : O(1)

function selectionSort(arr){
    for(let i = 0 ; i< arr.length; i++){
        let swap = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] > arr[swap]){
                swap = j;
            }
        }
        [arr[i],arr[swap]] = [arr[swap],arr[i]]
    }
}

//buble sort
//time complexity : best - O(n) , average : O(n^2), worst : O(n^2)
//space complexity : O(1)


function bubbleSort(arr){
    for(let i = 0 ; i < arr.length-1; i++){
        let isSwap = false;
        for(let j = 0 ; j < arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwap = true;
            }
        }
        if(!isSwap) {
            break;
        }
    }
}

//insertion sort
//time complexity : best - O(n) , average : O(n^2), worst : O(n^2)
//space complexity : O(1)

function insertionSort(arr){
     for(let i = 1; i<arr.length;i++){
        let j =  i-1;
        let curr = arr[i];
        while(j >= 0 && curr > arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
     }
}
