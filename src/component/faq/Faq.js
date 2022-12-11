import React from 'react';
import './Faq.css';
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import Question from './Question';
import { questions } from './data.js'

const Faq = () => {
  return (
    <section id='faq'>
      <div className="container faq" data-aos="fade-right">
     
     <div className="u-title">
        <BsFillBookmarkStarFill color='orangered' size={30}/>
        <h2>FAQs</h2>
        <p className="u-text-small u-text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod. Deserunt quam sequi molestias rerum non ducimus, sint quidem modi?
        </p>
      </div>

      <div className="questions">
        {
          questions.map((question)=>(
            <Question key={question.id} title={question.title} answer={question.answer}/>

          ))
        }
      </div>

    </div>
    </section>
  )
}

export default Faq
