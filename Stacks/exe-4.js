let array = [12, 32, 42, 31, 87, 45, 55];

function verify(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
}

verify(array);