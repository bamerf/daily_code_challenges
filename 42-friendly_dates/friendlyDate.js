// Displaying the formatted date range
const makeFriendlyDates = dates => {
  date1 = dates[0].split('-');
  date2 = dates[1].split('-');
  date1 = dateAppreviation(date1);
  date2 = dateAppreviation(date2);
  return [date1, date2];
};

// Formating each date
const dateAppreviation = date => {
  year = date[0];
  month = dateFormats.months[Number(date[1])];
  day = Number(date[2]);
  // Number to ordinal(eg. 1 => 1st)
  if (day in dateFormats.days) {
    day = dateFormats.days[day];
  } else {
    day = `${day}th`;
  }
  return `${month} ${day}, ${year}`;
};

dateFormats = {
  days: {
    01: '1st',
    02: '2nd',
    03: '3rd'
  },
  months: {
    01: 'Jan',
    02: 'Feb',
    03: 'Mar',
    04: 'Apr',
    05: 'May',
    06: 'Jun',
    07: 'Jul',
    08: 'Aug',
    09: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }
};
makeFriendlyDates(['2016-07-01', '2018-07-04']);
