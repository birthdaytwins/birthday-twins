// Example Birthday Twin Finder (simplified)
const birthdays = {
  "9-29": ["Enrico Fermi", "Halsey"],
  "7-15": ["Rembrandt", "Ariana Grande"]
};

function findTwins(date) {
  return birthdays[date] || ["No famous birthday twins found"];
}

console.log(findTwins("9-29"));
