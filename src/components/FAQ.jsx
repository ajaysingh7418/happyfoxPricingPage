import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const questions = [
        "Who are help desk agents?",
        "What are Categories?",
        "How can I change my plan?",
        "Do you offer a trial?",
        "Do you offer discounts for non-profits or educational institutes?",
        "What are the available billing cycles?",
    ];

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div className='faq-box'>
            <div className='half-div'></div>
            <div className="faq-container">
                <h3>Frequently Asked Questions</h3>
                {questions.map((question, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleQuestion(index)}>
                            {question}
                            <span className="arrow">
                                <img
                                    src="https://assets.www.happyfox.com/v2/images/down-arrow.svg"
                                    alt=""
                                    style={{ transform: openQuestionIndex === index ? 'rotate(180deg)' : 'none' }}
                                />
                            </span>
                        </div>
                        <div className={`faq-answer ${openQuestionIndex === index ? 'open' : ''}`}>
                            <p>Here should be the answer to the question</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
