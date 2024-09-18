function CountCharacters({ text }) {
    const countCharacters = (input) => input.length;
  
    return (
      <div>
        <p>Character count: {countCharacters(text)}</p>
      </div>
    );
  }
  
  export default CountCharacters;
  