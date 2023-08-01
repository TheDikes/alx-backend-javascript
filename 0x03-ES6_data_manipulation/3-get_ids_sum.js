export default function getStudentIdsSum(sumOfStudents) {
  const sum = sumOfStudents.reduce((initial, student) => initial + student.id, 0);

  return sum;
}
