function mapLetters(word) {
  const letterMap = {};

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    // If the letter is not already a key in the letterMap, create an array for it
    if (!letterMap[letter]) {
      letterMap[letter] = [];
    }

    // Push the index of the letter to its array
    letterMap[letter].push(i);
  }

  return letterMap;
}

// Test cases
console.log(mapLetters("dodo"));   // ➞ { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
