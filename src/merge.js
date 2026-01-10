"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.merge = merge;
function isAscending(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function isDescending(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function merge(collection_1, collection_2, collection_3) {
    if (!isAscending(collection_1)) {
        throw new Error("collection_1 is not sorted ascending.");
    }
    if (!isAscending(collection_2)) {
        throw new Error("collection_2 is not sorted ascending.");
    }
    if (!isDescending(collection_3)) {
        throw new Error("collection_3 is not sorted descending.");
    }
    var result = [];
    var i = 0;
    var j = 0;
    var k = collection_3.length - 1;
    var c1_length = collection_1.length;
    var c2_length = collection_2.length;
    while (i < c1_length || j < c2_length || k >= 0) {
        var v1 = i < c1_length ? collection_1[i] : Infinity;
        var v2 = j < c2_length ? collection_2[j] : Infinity;
        var v3 = k >= 0 ? collection_3[k] : Infinity;
        if (v1 <= v2 && v1 <= v3) {
            result.push(v1);
            i++;
        }
        else if (v2 <= v1 && v2 <= v3) {
            result.push(v2);
            j++;
        }
        else if (v3 <= v1 && v3 <= v2) {
            result.push(v3);
            k--;
        }
    }
    return result;
}
var collection_1 = ['hello'];
var collection_2 = [];
var collection_3 = [11, 9, 8];
var test = merge([1, 2, 3], [1, 2, 4], [4, 3, 0]);
console.log(test);
console.log(isAscending(collection_1));
