function JumbleWords({ text }) {
    const jumbleWords = (input) => {
      return input.split(' ').sort(() => Math.random() - 0.5).join(' ');
    };
  
    return (
      <div>
        <p>Jumbled words: {jumbleWords(text)}</p>
      </div>
    );
  }
  
  export default JumbleWords;
  