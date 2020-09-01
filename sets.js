const set1 = new Set();

set1.add('str');
set1.add('str2');
set1.add('1');
set1.add(23);
set1.add(false);
set1.add({a: "b"});

let set2 = new Set([1, 45, 'string', false, {a:4, b:8}]);

console.log("set1= " , set1);
console.log("set2 is= " ,set2);

console.log(set1.size);

console.log(set1.has(346));

set1.delete('tstr2');

set1.forEach((item)=>{
    console.log('Item is  :', item );
})