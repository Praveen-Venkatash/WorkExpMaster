function sortByCategory(data, cat, setData) {
  const category = cat;
  const sortedList = [...data];

  // Bubble sort
  for (let i = 0; i < sortedList.length; i++) {
    for (let j = 0; j < sortedList.length - i - 1; j++) {
      if (sortedList[j][category] > sortedList[j + 1][category]) {
        [sortedList[j], sortedList[j + 1]] = [sortedList[j + 1], sortedList[j]];
      }
    }
  }

  setData(sortedList);
}

export default sortByCategory;



