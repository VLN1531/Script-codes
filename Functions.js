// 4 Types of Functions: 

//1.Functions without input and without return:
function add(){
    var a = 10;
    var b = 20;
    console.log("Additions is: ",a+b);
}
add();

//2. Functions with Input and Without return
function sub(x,y){
    console.log("Subtraction is: ",x-y);//100
}
sub(200,100)

//3. Functions Without Input and With return
function mul(){
    var p = 300;
    var q = 100;
    return p * q;
}
let result = mul();
console.log("Multiplication is: ",result);

//4. Functions With Input and With return
function div(a,b){
    return a/b;
}
console.log("This Division is: ",div(500,10))