let n = [11,22,33,44,55,66]
let even = []
for (var i = 0; i < n.length;i++) {
    if (n[i]%2 === 0) {
        even.push(n[i])
    }
}
console.log('Even array is:',even);

//filter():
let odd = n.filter((ele)=>ele%2 !== 0)
console.log('Odd Elements are:',odd);