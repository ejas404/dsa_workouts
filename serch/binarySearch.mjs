import { quickSort } from "./quickSort.mjs"

let arr = [7,3,10,5,20,8,11,4]
quickSort(arr)
console.log(arr)

function binarySearch(arr,key){
    let i = 0, j= arr.length-1;
    while(i <= j){
        const mid = Math.floor((i+j)/2)
        if(key < arr[mid]){
            j = mid-1
        }else if(key > arr[mid]){
            i = mid+1
        }else{
            return mid;
        }
    }
    return -1;
}

function binaryRec(arr,key,left = 0,right = arr.length-1){
    // base case if there is not match;
    if(left > right) return -1;
    const mid = Math.floor((left + right)/2);
    
    if(key === arr[mid]) return mid;
    if(key < arr[mid]){
        return binaryRec(arr,key,left,mid-1)
    }
    if(key > arr[mid]){
        return binaryRec(arr,key,mid+1,right)
    }
}
