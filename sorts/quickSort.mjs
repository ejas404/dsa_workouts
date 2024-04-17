
function getPivot(arr,left = 0,right = arr.length-1){
    let elem = arr[left]
    let swapIdx = left;
    for(let i = left+1; i<=right; i++){
        if(arr[i] < elem){
            swapIdx++
            [arr[i],arr[swapIdx]] = [arr[swapIdx],arr[i]]
        }
    }

    [arr[left], arr[swapIdx]] = [arr[swapIdx],arr[left]]
    return swapIdx;
}


export function quickSort(arr,start = 0, end = arr.length-1){
    if(start > end) return;
    const pivot = getPivot(arr,start,end)
    quickSort(arr,start,pivot-1)
    quickSort(arr,pivot+1,end)
}
