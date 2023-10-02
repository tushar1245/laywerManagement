import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactModal from 'react-modal';
import { getAvailableTimeSlots } from '../state/selectors/selector';
import { bookAppointment } from '../state/action-creators';


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
  
    // Check if the selected time slot is already in the lawyer's appointments
    const isTimeSlotTaken = lawyer.appointments.some(
      (appointment) => appointment.day === day && appointment.startTime === startTime
    );
    
    let isPresent = 0; 
    for(let dayy in Object.keys(lawyer.appointments)){
        if(day === dayy && lawyer.appointments[day].includes(startTime)){
            isPresent = 1;
            break;
        }
    }
  
    if (isPresent) {
      console.log('aaya');
      window.alert('This time slot is already taken. Please choose a different one.');
    } else {
      // If the time slot is not taken, dispatch the action to add the appointment
      dispatch(bookAppointment(selectedLawyer, day, startTime));
    }
  
    setSelectedLaywer(null);
  };
  



//   const handleSubmit = (day, startTime) => {
//     // Handle form submission here
//     console.log('Selected Date:', selectedDate);
//     console.log('Selected Time:', selectedTime);
//     dispatch(bookAppointment(selectedLawyer, day, startTime) );
//     setSelectedLaywer(null);
//   };

  return (  
    
    
    <div>
    {/* {console.log(selectedLawyer)}; */}

      <h2>Lawyers from {firm} in {category} category:</h2>
      <ul>
        {filteredLawyers.map((lawyer) => (
        <div key = {lawyer.id}> 
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

            {/* <select value={selectedTime} onChange={handleTimeChange}>
              <option value="">Select a time</option>
              {getAvailableTimeSlots.map((daySlots) => (
                daySlots.slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))
              ))}
            </select> */}
  
  
          </label>
          <br />
          <button type="submit" onClick={() => handleSubmit(selectedDate, selectedTime)}>Submit</button>
        </form>

        
      </ReactModal>    



    </div>
  );
}

export default LawyerList;
