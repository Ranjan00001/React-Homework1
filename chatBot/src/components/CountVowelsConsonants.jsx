function CountVowelsConsonants({ text }) {
    const countVowelsAndConsonants = (input) => {
      let vowels = 'aeiouAEIOU';
      let vowelCount = 0;
      let consonantCount = 0;
  
      for (let char of input) {
        if (vowels.includes(char)) {
          vowelCount++;
        } else if (/[a-zA-Z]/.test(char)) {
          consonantCount++;
        }
      }
  
      return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
    };
  
    return (
      <div>
        <p>{countVowelsAndConsonants(text)}</p>
      </div>
    );
  }
  
  export default CountVowelsConsonants;
  