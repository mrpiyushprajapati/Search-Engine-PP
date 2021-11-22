function Dc({ val }) {
  return (
    <div className="data">
      {console.log(val)}
      {val
        .filter((a, b) => val.indexOf(a) === b)
        .map((val) => {
          return <p>{val}</p>;
        })}
    </div>
  );
}

export default Dc;
