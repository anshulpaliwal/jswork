function* genNum(){
    let i=0;
    yield "simple yield";
    while(i<5)
    {
        yield i++;
    }
}
const gen = genNum();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
