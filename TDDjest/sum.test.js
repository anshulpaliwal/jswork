
const sum = require('./sum');
test("Addition function exists",() => {
    expect(sum).toBeDefined()
});

test('Adds 5+3 equals 8',() => {
    expect(sum.add(5,3)).toBe(8);
});

test('Is null',() => {
    expect(sum.isNull()).toBeFalsy();
});

test('is less than 1500',()=>{
    const l1 = 300;
    const l2 = 800;
    expect(l1 +l2).toBeLessThan(1500);
});

test('there is no q in the string',() => {
    expect(`this string does'nt have cue`).not.toMatch(/q/);
});