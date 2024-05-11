import {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Date_component = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
         <DatePicker selected={startDate}
         onChange={(date) => setStartDate(date)}


         />
    </>
  )
}

export default Date_component
