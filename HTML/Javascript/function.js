
//javascript functions help use reuse codes

var a = 8
var b = 9
var c = a + b
console.log(c)

var r = 45
var y = 6
var j = r + y
console.log(j)

function sumOperator(no1,no2){
    return no1 + no2 
}
/*
console.log(sumOperator(3,5))
console.log(sumOperator(8,9))
*/

function subOperator(no1,no2){
    return no1 - no2 
}

//console.log(subOperator(90,5))

function divOperator(no1,no2){
    return no1 / no2 
}

// console.log(divOperator(45,7))

function operation (op,no1,no2){
    if(op == "add"){ // == comparison operator
        var ans = no1 + no2
    }else if(op == "sub"){
        var ans = no1 - no2
    }else if(op == "div"){
        var ans = no1 / no2
    }else if(op == "mult"){
        var ans = no1 * no2
    }
    return ans
}

console.log(operation("add",5,20))
console.log(operation("sub",7,9))
console.log(operation("div",6,9))
console.log(operation("mult",2,5))

function area(op,b,h){
if(op == "triangle"){
    var res = 1/2 * b * h
}else if(op == "rectangle"){
    var res = b * h
}
return res
}

console.log(area("triangle",10,6))
console.log(area("rectangle",4,20))


