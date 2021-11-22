function Dc({ val }) {
  return (
    <div className="data">
      {console.log(val)}
      {val.map((val) => {
        return <p>{val}</p>;
      })}
    </div>
  );
}

export default Dc;
