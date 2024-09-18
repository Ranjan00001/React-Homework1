function CountWords({ text }) {
    const countWords = (input) => {
      return input.trim().split(/\s+/).length;
    };
  
    return (
      <div>
        <p>Word count: {countWords(text)}</p>
      </div>
    );
  }
  
  export default CountWords;
  