function Result({correct, countQuestion, handleStartQuiz}) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали {correct} ответа из {countQuestion}</h2>
        <button onClick={handleStartQuiz}>Попробовать снова</button>
      </div>
    );
}

export default Result;