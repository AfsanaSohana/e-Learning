import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from '../../layouts/AdminLayout';

function QuizTest() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch quiz data from the backend
    axios.get('http://REACT_APP_BACKEND_URL/api/quizzes')
      .then((response) => {
        const quizzes = response.data.map((quiz) => ({
          id: quiz.id,
          question: quiz.question,
          options: JSON.parse(quiz.options), // Parse JSON string from the database
          answer: '', // Add an answer field dynamically for user selection
        }));
        setQuizData(quizzes);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (index, option) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].answer = option;
    setQuizData(updatedQuizData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answers = quizData.map((quiz) => ({
      question_id: quiz.id,
      answer: quiz.answer,
    }));

    const studentId = 1; // Replace with the actual student ID (e.g., from context or auth)

    axios.post('http://REACT_APP_BACKEND_URL/api/quizzes/submit', { student_id: studentId, answers })
      .then((response) => {
        setScore(response.data.score);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error submitting quiz:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="container mt-5">
        <div className="container">
          <div className="card-header bg-primary text-white">
            <h4>Quiz Test</h4>
          </div>
          <div className="card-body">
            {score === null ? (
              <>
                <form onSubmit={handleSubmit}>
                  {quizData.map((quiz, index) => (
                    <div className="mb-4" key={quiz.id}>
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
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>
              </>
            ) : (
              <div>
                <h5>Your Score: {score}/{quizData.length}</h5>
                <ul>
                  {results.map((result, index) => (
                    <li key={index} className={result.is_correct ? 'text-success' : 'text-danger'}>
                      <strong>Question:</strong> {result.question} <br />
                      <strong>Your Answer:</strong> {result.student_answer} <br />
                      <strong>Correct Answer:</strong> {result.correct_answer}
                    </li>
                  ))}
                </ul>
                <button onClick={() => window.location.reload()} className="btn btn-primary mt-3">
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default QuizTest;
