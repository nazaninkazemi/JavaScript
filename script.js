
const studentName = "Bahar";
const studentAge = 22;

const mathematicsMarks = 85;
const englishMarks = 90;
const computerMarks = 95;

const totalMarks = mathematicsMarks + englishMarks + computerMarks;

const averageMarks = totalMarks / 3;

const highestTotalMarks = 300;

const remainingMarks = highestTotalMarks - totalMarks;

const isOlderThan18 = studentAge > 18;

const isMathGreaterThan80 = mathematicsMarks > 80;

const isEnglishEqual100 = englishMarks === 100;

const isComputerDifferent50 = computerMarks !== 50;

const isAverageGreaterOrEqual50 = averageMarks >= 50;

let grade;

if (averageMarks >= 90) {
    grade = "A";
} else if (averageMarks >= 80) {
    grade = "B";
} else if (averageMarks >= 70) {
    grade = "C";
} else if (averageMarks >= 60) {
    grade = "D";
} else if (averageMarks >= 50) {
    grade = "E";
} else {
    grade = "F";
}


console.log("Student Result Calculator");

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);

console.log("Mathematics Marks:", mathematicsMarks);
console.log("English Marks:", englishMarks);
console.log("Computer Marks:", computerMarks);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Possible Marks:", highestTotalMarks);
console.log("Remaining Marks:", remainingMarks);

console.log("Is Student Older Than 18?", isOlderThan18);
console.log("Is Mathematics Greater Than 80?", isMathGreaterThan80);
console.log("Is English Equal to 100?", isEnglishEqual100);
console.log("Is Computer Different From 50?", isComputerDifferent50);
console.log("Is Average Greater Than or Equal to 50?", isAverageGreaterOrEqual50);

console.log("Student Grade:", grade);