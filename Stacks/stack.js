class Stack{
    constructor(){
        this.items = {};
        this.top = 0;
    };
    push(data){
        this.top++;
        this.items[this.top] = data;
    };

    pop(){
        let deletedData;
        if(this.top){
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        };
    };

    getSize(){
        return this.top;
    }

    isEmpty(){
        if(!this.getSize()){
            return true;
        }
        else{
            return false;
        }
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.top];
    }
};

const stack = new Stack();
stack.push('plato #1');
stack.push('plato #2');
stack.push('plato #3');

console.log(stack.pop())  // plato #3
console.log(stack.pop()) // plato #2
console.log(stack.pop()) // plato #1
console.log(stack.peek()) //null

console.log(stack.getSize()) // 0
console.log(stack.isEmpty()) // true


console.log(stack) // Stack {items: {}, top: 0 }






