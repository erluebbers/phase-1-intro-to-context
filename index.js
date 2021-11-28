
function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
  let employeeRecord = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
}

function createEmployeeRecords (array1, array2, ...arrays) {
  let employeeRecords = [
    createEmployeeRecord(array1),
    createEmployeeRecord(array2),
    createEmployeeRecord(arrays)
  ]
  return employeeRecords
}