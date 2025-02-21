const MyStack = require('./MyStack');

test(`push elements into stack`, () => {
    let stack = new MyStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.stack).toEqual([1,2,3]);
});
