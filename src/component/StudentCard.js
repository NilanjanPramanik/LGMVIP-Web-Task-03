import React from 'react'

function StudentCard({ sendData }) {

  return (
    sendData &&
    <div className='student_card'>
      <div className='card_container'>
        <div>
          <div className='table_header image'>Image</div>
          <div className='student_img_container'>
            <img src={ sendData.ImageLink} />
          </div>
        </div>
        <div>
          <div className='table_header dsce'>Description</div>
          <div className='card_details_container'>
            <p>Name: {sendData.Name}</p>
            <p>Email: {sendData.Email}</p>
            <p>Phone No: {sendData.Phone}</p>
            <p>Gender: {sendData.Gender}</p>
            {(sendData.HTML || sendData.CSS || sendData.JavaScript) && 
              <p>Skills: {sendData.HTML && " HTML "}{sendData.CSS && " CSS "}{sendData.JavaScript && " JavaScript "}</p>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard