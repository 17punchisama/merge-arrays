import { merge, isAscending, isDescending } from "../src/merge";

describe('merge', () => {
    test('merge : collection_1 is not ascending', () => {
        expect(() => {
            merge([1, 4, 3], [2, 5, 8, 9], [10, 6, 3, 0])
        }).toThrow("collection_1 is not sorted ascending.");
    });

    test('merge : collection_2 is not ascending', () => {
        expect(() => {
            merge([1, 3, 4], [2, 5, 9, 8], [10, 6, 3, 0])
        }).toThrow("collection_2 is not sorted ascending.");
    });

    test('merge : collection_3 is not sorted descending', () => {
        expect(() => {
            merge([1, 3, 4], [2, 5, 8, 9], [10, 3, 6, 0])
        }).toThrow("collection_3 is not sorted descending.");
    });

    test('merge : merge normal case', () => {
        const result = merge([1, 4, 7], [2, 5, 8, 9], [10, 6, 3, 0])
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('merge : collection_1 is empty', () => {
        const result = merge([], [1, 3, 6], [5, 4, 2])
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('merge : collection_2 is empty', () => {
        const result = merge([1, 4, 5], [], [3, 2])
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('merge : collection_3 is empty', () => {
        const result = merge([2, 5, 6], [3, 4, 7], [])
        expect(result).toEqual([2, 3, 4, 5, 6, 7]);
    });

    test('merge : only collection_1 has a data', () => {
        const result = merge([1, 3, 5], [], [])
        expect(result).toEqual([1, 3, 5]);
    });

    test('merge : only collection_2 has a data', () => {
        const result = merge([], [2, 4, 6], [])
        expect(result).toEqual([2, 4, 6]);
    });

    test('merge : only collection_3 has a data', () => {
        const result = merge([], [], [11, 9, 8])
        expect(result).toEqual([8, 9, 11]);
    });

    test('merge : all of collections are empty data', () => {
        const result = merge([], [], [])
        expect(result).toEqual([]);
    });

    test('merge : only one data per collection', () => {
        const result = merge([5], [9], [1])
        expect(result).toEqual([1, 5, 9]);
    });

    test('merge : data has a negative number', () => {
        const result = merge([-2, 3, 4], [-1, 1], [6, 5])
        expect(result).toEqual([-2, -1, 1, 3, 4, 5, 6]);
    });

    test('merge : has duplicates data in other collections', () => {
        const result = merge([1, 2, 3], [1, 2, 4], [4, 3, 0])
        expect(result).toEqual([0, 1, 1, 2, 2, 3, 3, 4, 4]);
    });
});

// ##################################################################
// Test isAscending function
describe('isAscending', () => { 
    test('isAscending : isAscending normal case', () => {
        const result = isAscending([1,2,3]);
        expect(result).toBe(true);
    });

    test('isAscending : data has a negative number', () => {
        const result = isAscending([-2,-1,9]);
        expect(result).toBe(true);
    });

    test('isAscending : data is not sorted', () => {
        const result  = isAscending([3,2,4]);
        expect(result).toBe(false);
    });

    test('isAscending : negative number data & not sorted', () => {
        const result = isAscending([-4,-5,1]);
        expect(result).toBe(false);
    });

    test('isAscending : only one data', () => {
        const result = isAscending([2]);
        expect(result).toBe(true);
    });

    test('isAscending : empty data', () => {
        const result = isAscending([]);
        expect(result).toBe(true);
    });

    test('isAscending : dupicates data', () => {
        const result = isAscending([1,1,2]);
        expect(result).toBe(true);
    })
});

// ##################################################################
// Test isDescending function
describe('isDescending', () => { 
    test('isDescending : isDescending normal case', () => {
        expect(isDescending([3,2,1])).toBe(true);
    });

    test('isDescending : data has a negative number', () => {
        expect(isDescending([-1,-2,-3])).toBe(true);
    });

    test('isDescending : data is not sorted', () => {
        expect(isDescending([1,2,3])).toBe(false);
    });

    test('isDescending : negative number data & not sorted', () => {
        expect(isDescending([4,-1,0])).toBe(false);
    });

    test('isDescending : only one data', () => {
        expect(isDescending([4])).toBe(true);
    });

    test('isDescending : empty data', () => {
        expect(isDescending([])).toBe(true);
    });

    test('isDescending : dupicate data', () => {
        expect(isDescending([3,3,2,1,1])).toBe(true);
    });
});