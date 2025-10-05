import React, { useState } from 'react'
import { expressQuiz} from '../assets/data.js'

function Expressq() {
    
    const [current, setCurrent] = useState(0) // Track current question
      const [selected, setSelected] = useState(null) // Track selected option
      const [showAnswer, setShowAnswer] = useState(false) // Show correct answer
      const [score, setScore] = useState(0) // Track total score
      const [quizEnd, setQuizEnd] = useState(false) // Show final score screen
    
      const question = expressQuiz[current]
    
      const handleOptionClick = (opt) => {
        if (!showAnswer) {
          setSelected(opt)
          setShowAnswer(true)
    
          // अगर सही answer है तो score बढ़ा दो
          if (opt === question.answer) {
            setScore(score + 1)
          }
        }
      }
    
      const nextQuestion = () => {
        if (current < expressQuiz.length - 1) {
          setCurrent(current + 1)
          setSelected(null)
          setShowAnswer(false)
        } else {
          setQuizEnd(true) // Quiz finish
        }
      }
    
      if (quizEnd) {
        return (
          <div className='bg-blue-800 min-h-screen flex justify-center items-center p-5'>
            <div className='bg-blue-200 w-[60%] p-10 rounded-lg shadow-lg text-center'>
              <h1 className='text-3xl font-bold mb-4'>🎉 Quiz Completed!</h1>
              <p className='text-xl font-medium'>
                Your Score: <span className="text-blue-950 font-bold">{score}</span> / {expressQuiz.length}
              </p>
              <button
                onClick={() => window.location.reload()} // Restart quiz
                className='mt-6 bg-blue-950 hover:bg-blue-800 text-white px-6 py-2 rounded-md'
              >
                Restart Quiz
              </button>
            </div>
          </div>
        )
      }
    
      return (
        <div className='bg-blue-800 min-h-screen flex justify-center items-center p-5'>
          <div className='bg-blue-200 w-[85%] p-5 rounded-lg shadow-lg'>
            
            {/* Quiz Header */}
            <h1 className='font-bold text-2xl text-center mb-6'>
              WELCOME TO EXPRESS QUIZ
            </h1>
            
            {/* Question Header */}
            <div className='flex items-center gap-5 mb-5'>
              <span className='bg-blue-950 rounded-full w-12 h-12 flex justify-center items-center text-white font-bold'>
                {question.id}
              </span>
              <span className='bg-blue-100 flex-1 p-3 rounded-md font-medium'>
                {question.question}
              </span>
            </div>
    
            {/* Options */}
            <div className='grid grid-cols-2 gap-4 mb-6'>
              {question.options.map((opt, index) => {
                let optionClass =
                  "bg-blue-950 text-white p-3 rounded-md cursor-pointer transition-all duration-200"
                
                if (showAnswer) {
                  if (opt === question.answer) {
                    optionClass = "bg-yellow-400 text-black p-3 rounded-md"
                  } else if (opt === selected) {
                    optionClass = "bg-red-400 text-white p-3 rounded-md"
                  }
                }
    
                return (
                  <span
                    key={index}
                    onClick={() => handleOptionClick(opt)}
                    className={optionClass}
                  >
                    {opt}
                  </span>
                )
              })}
            </div>
    
            {/* Next Button */}
            <div className='flex justify-center'>
              <button
                onClick={nextQuestion}
                className='bg-blue-950 hover:bg-blue-800 rounded-md h-10 w-[30%] text-white transition-all duration-200'
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      )
    }

export default Expressq