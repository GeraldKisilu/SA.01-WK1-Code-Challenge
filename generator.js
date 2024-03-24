// Prompt the user to inputmarks
const grades = prompt("students's marks(0-100)");
console.log(grades);

function StudentGrader(score) {
    let grade = " ";
    if (score > 100 || score < 0) {
        grade = "invalid input";
    }else if (score > 79) {
        grade = "A";
    }else if (score >= 60 && score <=79) {
        grade ="B";
    }else if (score >= 49 && score <=59) {
        grade ="C";
    }else if (score >= 40 && score <=49) {
        grade ="D";
    }else {
        grade ="E"
    }
    return grade;
}

console.log(StudentGrader(40));