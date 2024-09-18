function Lowercase({ text }) {
    const convertToLowercase = (input) => input.toLowerCase();
  
    return (
      <div>
        <p>{convertToLowercase(text)}</p>
      </div>
    );
  }
  
  export default Lowercase;
  