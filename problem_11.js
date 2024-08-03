// Extend the Array prototype with custom methods
Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.customFilter = function(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.customReduce = function(reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = reducer(accumulator, this[i], i, this);
    }
    return accumulator;
};

Array.prototype.customSlice = function(start, end) {
    const result = [];
    end = end === undefined ? this.length : end;
    for (let i = start; i < end && i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
};

Array.prototype.customSplice = function(start, deleteCount, ...items) {
    const result = [];
    const deletedItems = [];
    
    // Extract deleted items
    for (let i = start; i < start + deleteCount && i < this.length; i++) {
        deletedItems.push(this[i]);
    }
    
    // Reconstruct the array with new items
    for (let i = 0; i < this.length; i++) {
        if (i < start) {
            result.push(this[i]);
        } else if (i >= start + deleteCount) {
            result.push(this[i]);
        }
    }
    
    // Insert new items
    for (let i = 0; i < items.length; i++) {
        result.splice(start + i, 0, items[i]);
    }
    
    // Copy back the result to the original array
    for (let i = 0; i < result.length; i++) {
        this[i] = result[i];
    }
    this.length = result.length;
    
    return deletedItems;
};

Array.prototype.customPush = function(...items) {
    const oldLength = this.length;
    for (let i = 0; i < items.length; i++) {
        this[oldLength + i] = items[i];
    }
    return this.length;
};

Array.prototype.customPop = function() {
    if (this.length === 0) return undefined;
    const removedElement = this[this.length - 1];
    this.length--;
    return removedElement;
};

// Testing the custom methods
const arr = [1, 2, 3, 4, 5];

console.log(arr.customSlice(1, 3)); // Output: [2, 3]
console.log(arr.customSplice(2, 0, 6)); // Output: [3, 4, 5]
console.log(arr.customPush(6, 7)); // Output: 7 (new length of the array)
console.log(arr.customPop()); // Output: 7 (removed element)

console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15
