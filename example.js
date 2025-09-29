// Example: Simple Birthday Twin Finder

const birthdays = {
  "1-15": ["Martin Luther King Jr. - Civil Rights Leader"],
  "2-11": ["Thomas Edison - Inventor"],
  "3-14": ["Albert Einstein - Physicist"],
  "7-15": ["Rembrandt - Artist"],
  "9-29": ["Enrico Fermi - Physicist"],
  "12-18": ["Billie Eilish - Singer"]
};

function findTwins(date) {
  return birthdays[date] || ["No famous birthday twins found"];
}

// Example usage:
console.log(findTwins("9-29"));
