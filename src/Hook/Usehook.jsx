import React from 'react'
import React, { useEffect , useState} from 'react'
function Usehook() {
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => setData(data.results));
  },[])
    const [data,setData] = useState([]);
  return (
    <div>Usehook</div>
  )
}

export default Usehook