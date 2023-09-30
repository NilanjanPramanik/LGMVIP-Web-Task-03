import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import StudentCard from './StudentCard';

function Search({sendData}) {
    const [searchedData, setSearchData] = useState("");
    const [studentData, setStudentData] = useState(null);

    const handleSearch = () => {
         setStudentData(sendData.find((data)=> data.Name === searchedData))
    }

    return (
        <div className='search_component'>
            <div className='searchBar_container'>
                <input placeholder='Student name' onChange={(e) => setSearchData(e.target.value)}/>
                <div onClick={handleSearch} className='icon'><SearchIcon /></div>
            </div>
            <div>
                <StudentCard sendData={studentData} />
            </div>
        </div>
    )
}

export default Search;