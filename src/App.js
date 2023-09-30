import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import Header from './component/Header';
import ResultComp from './component/ResultComp';
import Search from './component/Search';

function App() {
  const [data, setData] = useState([]);
  
  const getFormData = (formData) => {
    setData([...data, formData]);
  }

  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='page_layOut'>
        <div className='border'>
          <h2>Registration Form</h2>
          <Form sendFormData={getFormData} />
        </div>

        <div>
          <div>
            <h2>Search</h2>
            <Search sendData={data} />
          </div>
          <div>
            <h2>Student's Details</h2>
            {data.length === 0 && <p className='emptyStudent_cont'>No Student Enrolled</p>}
            <ResultComp sendData={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
