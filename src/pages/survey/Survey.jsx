import './survey.css';
import { useNavigate } from 'react-router-dom';
import Date_component from '../../components/date_component/Date_component';

const Survey = () => {


  const navigate = useNavigate();

  const handleClose = ()=>{
    alert("clse windows")

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Enviando test")
    navigate('/');

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
        <Date_component/>
        </div>
        <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 1</span>
          <div className="container_survey-question">

            <label >
              <input type="radio" name="question1" value="a"/>
              A
            </label>
            <label>
              <input type="radio" name="question1" value="b"/>
              B
            </label>
            <label>
              <input type="radio" name="question1" value="c"/>
              C
            </label>
            <label>
              <input type="radio" name="question1" value="d"/>
              D
            </label>
          </div>
      </div>

      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 2 </span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question2" value="a"/>
              A
            </label>
            <label>
              <input type="radio" name="question2" value="b"/>
              B
            </label>
            <label>
              <input type="radio" name="question2" value="c"/>
              C
            </label>
            <label>
              <input type="radio" name="pquestion2" value="d"/>
              D
            </label>
          </div>
      </div>


      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 3</span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question3" value="a"/>
              A
            </label>
            <label>
              <input type="radio" name="question3" value="b"/>
              B
            </label>
            <label>
              <input type="radio" name="question3" value="c"/>
              C
            </label>
            <label>
              <input type="radio" name="question3" value="d"/>
              D
            </label>
          </div>
      </div>


      <div className="container_survey-questions">
        <span className='survey_label'>Pregunta 4</span>
          <div className="container_survey-question">

            <label>
              <input type="radio" name="question4" value="a"/>
              A
            </label>
            <label>
              <input type="radio" name="question4" value="b"/>
              B
            </label>
            <label>
              <input type="radio" name="question4" value="c"/>
              C
            </label>
            <label>
              <input type="radio" name="question4" value="d"/>
              D
            </label>
          </div>
      </div>
      <button type='submit' className='container__enviar--button' onClick={handleSubmit}>
          Enviar
        </button>


        </div>

    </div>
    </>
  )
}

export default Survey
