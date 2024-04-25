export const getToday = (hospital) => {
  const weekNumber = new Date().getDay();
  const weekList = hospital?.["clinicHoursList"];
  const resultList = {};
  const addedOrderWeekList = weekList?.map((week) => ({
    key: setOrder(week["weekName"]),
    ...week,
  }));
  addedOrderWeekList?.sort((a, b) => a.key - b.key);
  resultList["today"] = addedOrderWeekList?.filter((week) => {
    if (week?.["weekName"] === "매일") {
      return week;
    }
    return weekNumber === week.key;
  })?.[0];
  resultList["sortedList"] = addedOrderWeekList;
  return resultList;
};

const setOrder = (x) => {
  switch (x) {
    case "일":
      return 0;
    case "월":
      return 1;
    case "화":
      return 2;
    case "수":
      return 3;
    case "목":
      return 4;
    case "금":
      return 5;
    case "토":
      return 6;
    case "매일":
      return -1;
  }
};