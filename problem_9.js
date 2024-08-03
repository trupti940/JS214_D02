function sortStudentsByCondition(students, conditionFn) {
    // Use the sort method with the provided condition function
    return students.sort(conditionFn);
}

// Example usage:
const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
];

// Condition function to sort by age in descending order
function sortByAgeDescending(a, b) {
    return b.age - a.age;
}

// Call the sortStudentsByCondition function with the students array and the condition function
const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
console.log(sortedStudents);

// Output should be:
// [
//     { name: "Charlie", age: 23 },
//     { name: "Alice", age: 21 },
//     { name: "David", age: 20 },
//     { name: "Bob", age: 19 }
// ]
