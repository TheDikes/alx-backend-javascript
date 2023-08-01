export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const updatedStudents = studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });

  return updatedStudents;
}
