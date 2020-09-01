const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function f() { };

myMap.set(key34, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

console.log(myMap.get(key2));

console.log(myMap.size);

for (let [key, value] of myMap) {
    console.log(key, value);
}


