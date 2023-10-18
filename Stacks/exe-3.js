function verify(string){
    list = []
    for(let i = 0; i < string.length; i++){
        if(string[i] == '('){
            list.push(string[i])
        }
        else if(string[i] == ')'){
            if(list.length == 0 || list.pop() !== '('){
                return false;
            }
        }
        return list.length === 0;
    }
}

console.log(verify('a+(b-1)'));