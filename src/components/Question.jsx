function Question({question, step, countQuestion, handleVariant}) {
  const percent = Math.round(step / countQuestion * 100) + '%';
  return (
    <>
      <div className="progress">
        <div style={{ width: percent}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
        <li key={index} onClick={()=>handleVariant(index, question.correct)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Question