// 90-100 - Grade A
// 70-89 - Grade B
// 50-69 - Grade C
// Below 50 - Grade F

var studentScore = 45;

if (studentScore > 90) {
  console.log("Student has scored A");
} else if (studentScore >= 70 && studentScore < 90) {
  console.log("Student has scored B");
} else if (studentScore >= 50 && studentScore < 70) {
  console.log("Student has scored C");
} else {
  console.log("Student has got F");
}
