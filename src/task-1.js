const data = require("./data/processed-anime-data.json");

// Given a set of data with 2 columns, title and summary, we want to:

// const anime = data.anime
// above is equivalent to the next line
const { anime } = data;

// Let's use an Object as our primary data structure to store details about individual words
// this will allow us to easily check if we've already counted a specific word,
// if we have then we can just increment its count
const words = {};

// Step 1: Loop through ALL rows of data
anime.forEach(({ title, summary }) => {
  // Step 2: Within the loop, for the current row, we want to
  // Step 3: Split the summary into individual words, rather than just a long string of text
  const tokens = summary.split(" ");
  // we split the summary because we have to use individual words as object keys to keep track of its term frequency
  tokens.forEach(token => {
    // Step 4: Count the number of times each individual word occurs
    const word = token.toLowerCase();
    // the word doesn't exist in our data structure so let's add it!
    if (!words[word]) {
      words[word] = {
        tf: 1
      };
    } else {
      // the word exists, so let's increment its term frequency!
      const exisitingFrequency = words[word].tf;
      words[word].tf = exisitingFrequency + 1;
    }
  });
});

// Sorting an object is incredibly difficult, so instead we move our data structure
// into an array which is easily sortable, for our use case, we create an ARRAY of ARRAYS
// these nested arrays are meant to mock a Tuple since the ordering of the array is critical
// e.g. ["word", termFrequency] will always be the value of the nested array
const sortable = Object.entries(words).map(([word, data]) => [word, data.tf]);

// Here, we sort in descending order, greatest term frequency to least
sortable.sort((a, b) => b[1] - a[1]);

// simply display in console
console.log(sortable);
