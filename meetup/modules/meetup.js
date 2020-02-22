const meetupDay = (year, month, dayOfWeek, schedule) => {

  const DayOfWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }

  const Schedule = {
    first:  '1st',
    second: '2nd',
    third:  '3rd',
    fourth: '4th',
    last:   'last',
    teenth: 'teenth'
  }

  const startDay =
    schedule === Schedule.second ? 8 :
    schedule === Schedule.third ? 15 :
    schedule === Schedule.fourth ? 22 :
    schedule === Schedule.teenth ? 13 :
    1

  let day = new Date(year, month, startDay)

  if (schedule === Schedule.last) {
    day.setMonth(day.getMonth() + 1)
    day.setDate(day.getDate() - 7)
  }

  while (day.getDay() != DayOfWeek[dayOfWeek]) {
    day.setDate(day.getDate() + 1)
  }

  return day
  
}

module.exports = meetupDay