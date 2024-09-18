function MostFrequentLetter({ text }) {
    const findMostFrequentLetter = (input) => {
      const frequency = {};
      let maxCount = 0;
      let mostFrequent = '';
  
      for (let char of input.replace(/\s/g, '')) {
        frequency[char] = (frequency[char] || 0) + 1;
        if (frequency[char] > maxCount) {
          maxCount = frequency[char];
          mostFrequent = char;
        }
      }
  
      return mostFrequent;
    };
  
    return (
      <div>
        <p>Most frequent letter: {findMostFrequentLetter(text)}</p>
      </div>
    );
  }
  
  export default MostFrequentLetter;
  