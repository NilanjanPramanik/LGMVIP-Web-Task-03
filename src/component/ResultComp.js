import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard';

function ResultComp({sendData}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(sendData);
  }, [sendData])

  return (
    <div className='result_component'>
      {data &&  data.map((studentData, indx) => (
        <StudentCard key={indx} sendData={studentData}/>
      ))}
    </div>
  )
}

export default ResultComp;