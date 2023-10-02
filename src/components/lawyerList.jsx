import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactModal from 'react-modal';
import { bookAppointment } from '../state/action-creators';
import { Button } from '@mui/material';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#yourAppElement');



function LawyerList() {
  const lawyers = useSelector((state) => state.lawyers);
  const {firm, category} = useParams();

  const [selectedLawyer, setSelectedLaywer] = useState(null);

  //console.log('LawyerList component rendered with firm:', firm, 'category:', selectedCategory);
  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      lawyer.firm === firm && lawyer.category.includes(category)
  );
  //console.log(lawyers);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (day, startTime) => {
    // Handle form submission here
    console.log('Selected Date:', day);
    console.log('Selected Time:', startTime);
  
    // Find the corresponding lawyer based on selectedLawyer
    const lawyer = lawyers.find((l) => l.id === selectedLawyer);
    console.log(lawyer);
    // if (!lawyer) {
    //   // Handle the case where the selected lawyer is not found
    //   console.error('Selected lawyer not found.');
    //   return;
    // }
  
    let isPresent = false;
    Object.keys(lawyer.appointments).forEach(key => {
      console.log(key,lawyer.appointments[key])
      if(day === key && lawyer.appointments[key].includes(startTime)){
        isPresent = true;
      }
    })
  
    if (isPresent) {
      console.log('aaya');
      window.alert('This time slot is already taken. Please choose a different one.');
    } else {
      // If the time slot is not taken, dispatch the action to add the appointment

      dispatch(bookAppointment(selectedLawyer, day, startTime));
      window.alert('Booking Successfull');
    }
  
    setSelectedLaywer(null);
  };
  



  return (  
    
    
    <div>
    {/* {console.log(selectedLawyer)}; */}

      <h2 >Lawyers from {firm} in {category} category:</h2>
      <ul>
        {filteredLawyers.map((lawyer) => (
        <div  key = {lawyer.id} className=''> 
          <li key={lawyer.id}>{lawyer.name}</li>
          <button onClick={() => setSelectedLaywer(lawyer.id)}> Set Appointment</button>
        </div>
        ))}
      </ul>

      <ReactModal
        isOpen={selectedLawyer !== null}
        
        onRequestClose={()=>{
            setSelectedLaywer(null);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <div>Book your appointment here</div>
        <h2>Choose Date and Time</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input type="date" value={selectedDate} onChange={handleDateChange} />
          </label>
          <br />
          <label>
            Time:

            <select value={selectedTime} onChange={handleTimeChange}>
    <option value="">Select a time</option>
    {/* Generate time options from 9 am to 5 pm with 30-minute intervals */}
    {Array.from({ length: 16 }).map((_, index) => {
      const startHour = Math.floor(index / 2) + 9;
      const startMinute = index % 2 === 0 ? '00' : '30';
      const endHour = Math.floor((index + 1) / 2) + 9;
      const endMinute = (index + 1) % 2 === 0 ? '00' : '30';
      const startTime = `${startHour}:${startMinute}`;
      const endTime = `${endHour}:${endMinute}`;
      return (
        <option key={startTime} value={startTime}>
          {`${startTime} - ${endTime}`}
        </option>
      );
    })}
  </select>

            
  
  
          </label>
          <br />
          <Button variant="contained" type="submit" onClick={() => handleSubmit(selectedDate, selectedTime)} >Submit</Button>
          {/* <button type="submit" onClick={() => handleSubmit(selectedDate, selectedTime)}>Submit</button> */}
        </form>

        
      </ReactModal>    



    </div>
  );
}

export default LawyerList;
