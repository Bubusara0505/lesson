function removeVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])) {
          result += word[i];
      }
  }
  return result;
}


const word = "Watsapp";
const result = removeVowels(word);
console.log(result);
