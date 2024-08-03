function calculateFinalGrades(students) {
    return students
        .map(student => {
            // Handle empty scores array
            if (student.scores.length === 0) {
                return { id: student.id, name: student.name, finalGrade: 0 };
            }
            
            // Calculate the final grade
            const sumOfScores = student.scores.reduce((sum, score) => sum + score, 0);
            const numberOfScores = student.scores.length;
            const finalGrade = Math.round(sumOfScores / numberOfScores);
            
            // Return the student object with finalGrade
            return {
                id: student.id,
                name: student.name,
                finalGrade: finalGrade
            };
        })
        .filter(student => student.finalGrade >= 70); // Filter students with finalGrade >= 70
}

// Example usage:
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 88, 78] }
];

const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);
