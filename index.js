
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


function createEmployeeRecords (array) {  
  let employeeRecords = []
  array.forEach(employee => {
    employeeRecords.push(createEmployeeRecord(employee))
  })
  return employeeRecords
}

function createTimeInEvent (employeeRecord, dateString) {
  let timeIn = {
    type: "TimeIn",
    hour: parseInt(dateString.slice(11)),
    date: dateString.slice(0, 10)
  }
  employeeRecord.timeInEvents.push(timeIn)
  return employeeRecord
}

function createTimeOutEvent (employeeRecord, dateString) {
  let timeOut = {
    type: "TimeOut",
    hour: parseInt(dateString.slice(11)),
    date: dateString.slice(0, 10)
  }
  employeeRecord.timeOutEvents.push(timeOut)
  return employeeRecord
}

function hoursWorkedOnDate (employeeRecord, date) {
  let start
  let end
  for (const obj of employeeRecord.timeInEvents) {
    if (obj.date === date) {
      start = obj.hour
    }
  }
  for (const obj of employeeRecord.timeOutEvents) {
    if (obj.date === date) {
      end = obj.hour
    }
  }
  return (end - start)/100
}

function wagesEarnedOnDate (employeeRecord, date) {
  return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
}

function allWagesFor (employeeRecord) {
  let wagesArray = []
  let dateArray = employeeRecord.timeInEvents.filter(array => array.date)
  for (const value of dateArray) {
    wagesArray.push(hoursWorkedOnDate(employeeRecord, value))
  }
  return wagesArray.reduce((a, b) => a + b, 0)
}