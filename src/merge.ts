export function isAscending(arr: number[]): boolean {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

export function isDescending(arr: number[]): boolean {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            return false;
        }
    }
    return true;
}

export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {

    if(!isAscending(collection_1)) {
        throw new Error("collection_1 is not sorted ascending.")
    }

    if(!isAscending(collection_2)) {
        throw new Error("collection_2 is not sorted ascending.")
    }

    if(!isDescending(collection_3)) {
        throw new Error("collection_3 is not sorted descending.")
    }
    
    const result: number[] = [];

    let i = 0;
    let j = 0;
    let k = collection_3.length - 1

    let c1_length = collection_1.length;
    let c2_length = collection_2.length;

    while (i < c1_length || j < c2_length || k >= 0) {
        const v1 = i < c1_length? collection_1[i] : Infinity;
        const v2 = j < c2_length? collection_2[j] : Infinity;
        const v3 = k >= 0? collection_3[k] : Infinity;
        
        if(v1 <= v2 && v1 <= v3) {
            result.push(v1);
            i++;
        } else if (v2 <= v1 && v2 <= v3) {
            result.push(v2);
            j++;
        } else if (v3 <= v1 && v3 <= v2) {
            result.push(v3);
            k--;
        }
    }
    
    return result;
}