import React, { useEffect, useState} from 'react'


function Json() {
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => console.log(data.results));
  },[])
  const [data,setData] = useState([]);
  return (
    <div>
        {
          data.length > 0 ? <div>
            {
              data.map((item) => {
                <div><h2>data fund</h2></div>
              })
            }

          </div>:<div><h2> data not fund</h2></div>
}
    </div>
  )
}

export default Json