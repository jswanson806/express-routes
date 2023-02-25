const helper = require("./helper")


describe('test helper functions', function() {

    beforeEach(() => {
        nums = ['1,3,5,7'];
    })
    
    test('extractVals should return a new array of nums split on a comma', () => {
        const vals = helper.extractVals(nums);
        expect(vals.length).toEqual(4);
    })

    test('median should return the middle value of an array of numbers', () => {
        const evenArr = helper.extractVals(nums);
        const evenRes = helper.median(evenArr);
        expect(evenRes).toEqual(4);

        const oddArr = ['1,3,5,7,8'];
        const oddRes = helper.extractVals(oddArr);
        const val = helper.median(oddRes);
        expect(val).toEqual(5);
    })

    test('mode should return the most frequent number in an array of numbers or the first number if all have equal frequency', () => {
        const vals = helper.extractVals(nums);
        const res = helper.mode(vals);
        expect(res).toEqual(1);

        const newNums = ['1,2,3,3,4,4,4'];
        const newVals = helper.extractVals(newNums);
        const newRes = helper.mode(newVals);
        expect(newRes).toEqual(4);

    })

})