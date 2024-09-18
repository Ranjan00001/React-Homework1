function CapitalizeWords({ text }) {
    const capitalizeWords = (input) => {
      return input
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
  
    return (
      <div>
        <p>{capitalizeWords(text)}</p>
      </div>
    );
  }
  
  export default CapitalizeWords;
  