let grades = [73, 67, 38, 33];
function gradingStudents(grades) {
  return grades.map((x) => {
    if (x >= 38) {
      if (x % 5 >= 3) return x + 5 - (x % 5);
      else return x;
    } else return x;
  });
}

console.log(gradingStudents(grades));
