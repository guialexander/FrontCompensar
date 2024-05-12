import './survey.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const Survey = () => {

  //http://localhost:8080/api/surveys
 const BASE_URL = import.meta.env.VITE_API_URL;
 const url = `${BASE_URL}/api/surveys`;
  const [btnActive,setBtnActive]=useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [questions, setQuestion] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const datesurvey = startDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    //console.log(name, value);
    setQuestion(prevQuestions => {
      const updatedQuestions = {
        ...prevQuestions,
        [name]: value,
        datesurvey: datesurvey
      };
      validationquestions(updatedQuestions);
      return updatedQuestions;
    });
  };

  const handleClose = ()=>{
    navigate('/');
  }

  const validationquestions = (updatedQuestions) => {
    const allAnswers= Object.values(updatedQuestions).every(question => question !== '');
    setBtnActive(allAnswers);
  };
//submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questions),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    Swal.fire({
      icon: "success",
      title: 'Tus respuestas se han guardado de manera correcta',

    });
    navigate('/');
  } catch (error) {
    console.log(error);
  }

}

  return (
    <>
    <div className="body_survey">
        <div className="container_survey">
          <div className="date_component">
            <div className="survey_close">
            <h1>Encuesta</h1>
            <button onClick={handleClose} className='survey_close--btn'>X</button>

            </div>
           <label className='survey_label'>
              Fecha
            </label>
            <DatePicker selected={startDate}
             onChange={(date) => setStartDate(date)}
         />

        </div>
        <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 1</span>
          <div className="container_survey-question">

            <label >
              <input type="radio" name="question1" value="a" onChange={handleChange}/>
              A
            </label>
            <label>
              <input type="radio" name="question1" value="b" onChange={handleChange}/>
              B
            </label>
            <label>
              <input type="radio" name="question1" value="c" onChange={handleChange}/>
              C
            </label>
            <label>
              <input type="radio" name="question1" value="d" onChange={handleChange}/>
              D
            </label>
          </div>
      </div>

      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 2 </span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question2" value="a" onChange={handleChange}/>
              A
            </label>
            <label>
              <input type="radio" name="question2" value="b" onChange={handleChange}/>
              B
            </label>
            <label>
              <input type="radio" name="question2" value="c" onChange={handleChange}/>
              C
            </label>
            <label>
              <input type="radio" name="question2" value="d" onChange={handleChange}/>
              D
            </label>
          </div>
      </div>


      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 3</span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question3" value="a" onChange={handleChange}/>
              A
            </label>
            <label>
              <input type="radio" name="question3" value="b" onChange={handleChange}/>
              B
            </label>
            <label>
              <input type="radio" name="question3" value="c" onChange={handleChange}/>
              C
            </label>
            <label>
              <input type="radio" name="question3" value="d" onChange={handleChange}/>
              D
            </label>
          </div>
      </div>


      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 4</span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question4" value="a" onChange={handleChange}/>
              A
            </label>
            <label>
              <input type="radio" name="question4" value="b" onChange={handleChange}/>
              B
            </label>
            <label>
              <input type="radio" name="question4" value="c" onChange={handleChange}/>
              C
            </label>
            <label>
              <input type="radio" name="question4" value="d" onChange={handleChange}/>
              D
            </label>
          </div>
      </div>
      <button type='submit' className='container__enviar--button' disabled = {!btnActive} onClick={handleSubmit}>
          Enviar
        </button>


        </div>

    </div>
    </>
  )
}

export default Survey
