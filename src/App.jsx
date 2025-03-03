import { useState } from 'react';
import './index.scss';
import Question from './components/Question';
import Result from './components/Result';
import useFetch from './hooks/useFetch';


function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const { data: questions, loading, error } = useFetch("http://localhost:8000/questions");

  const question = questions ? questions[step] : null;

  const handleVariant = (index, correctAnswer) => {
    setStep(step + 1);

    if(index === correctAnswer){
      setCorrect(correct + 1)
    }
  }

  const handleStartQuiz = () => {
    setCorrect(0);
    setStep(0);
  }

 
  return (
    <div className="App">
      {question ? (
        <Question 
          question={question} 
          step={step} 
          countQuestion={questions.length} 
          handleVariant={handleVariant} 
          />
      ) : (
        <Result correct={correct} countQuestion={questions ? questions.length : 0} handleStartQuiz={handleStartQuiz} />
      )
      }
    </div>
  );
}

export default App;