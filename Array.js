var arr1 = [10,20.44,true,'kod',{name:'vln',age:22},()=>{console.log('Function')},[100,200]]
//console.log('Element at 0th index:',arr1[0]);
//console.log('Element at 1th index:',arr1[1]);
//console.log('Element at 2th index:',arr1[2]);
//console.log('Element at 3th index:',arr1[3]);

// using for loop

for(var i = 0; i <= arr1.length-1; i++) {
    console.log(`Element at index ${i}`, arr1[i]);
}