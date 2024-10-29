import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate,} from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout'

function QuizTest() {
    const navigate = useNavigate();

    const [quizData, setQuizData] = useState([
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: '',
      },
      {
        question: 'Who wrote "Hamlet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
        answer: '',
      },
      {
        question: 'What is the chemical symbol for water?',
        options: ['O2', 'H2O', 'CO2', 'NaCl'],
        answer: '',
      },
    ]);
  
    const handleOptionChange = (index, option) => {
        const newQuizData = [...quizData];
        newQuizData[index].answer = option;
        setQuizData(newQuizData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Answers:', quizData);
        // You can navigate to a result page or show a success message here
        navigate('/quiz/result');
      };

  return (
    <>
    <AdminLayout>
    <div className="container mt-5">
      <div className="container">
        <div className="card-header bg-primary text-white ">
          <h4>Quiz Test </h4>
        </div>
        <div className="card-body">
          <p className="mb-4">
            Please read the instructions carefully before starting the quiz:
          </p>
          
            <p className=" align-content-center">You have 15 minutes to complete the quiz.</p>
            <p className="list-group-item">2 marks for each question.</p>
            <p className="list-group-item">You can review your answers before submitting.</p>
          
          <form onSubmit={handleSubmit}>
            {quizData.map((quiz, index) => (
              <div className="mb-4" key={index}>
                <h5>{index + 1}. {quiz.question}</h5>
                {quiz.options.map((option, optionIndex) => (
                  <div className="form-check" key={optionIndex}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question${index}`}
                      id={`question${index}option${optionIndex}`}
                      value={option}
                      checked={quiz.answer === option}
                      onChange={() => handleOptionChange(index, option)}
                    />
                    <label className="form-check-label" htmlFor={`question${index}option${optionIndex}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="btn btn-success">
              Submit 
            </button>
          </form>
        </div>
      </div>
    </div>
 </AdminLayout>
    </>
  )
}

export default QuizTest