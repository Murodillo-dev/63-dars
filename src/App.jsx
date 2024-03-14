import React, { useEffect, useState } from 'react'

const App = () => {
  const [url, setUrl] = useState('https://reqres.in/api/users?page=1')
  const [api, setApi] = useState([])


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(info => {
        setApi(info.data)
      })
  }, [url])
  console.log(api);


  function api1() {
    setUrl('https://reqres.in/api/users?page=1')
  }

  function api2() {
    setUrl('https://reqres.in/api/users?page=2')
  }

  console.log(url);
  return (
    <div>


      <div className="card flex justify-evenly flex-wrap">
        {
          api.map((value) => {
            return (
              <ul className='w-[200px] py-2 flex justify-center flex-wrap bg-cyan-500 rounded-xl m-5'>
                <img src={value.avatar} alt="" />
                <li className='w-full text-center'>{value.first_name}</li>
                <li>{value.last_name}</li>
                <li>{value.email}</li>
              </ul>
            )
          })
        }
      </div>

      <button onClick={api1} className='w-[150px] py-1 bg-cyan-600 rounded-xl m-2'>API1</button>
      <button onClick={api2} className='w-[150px] py-1 bg-cyan-600 rounded-xl m-2'>API2</button>

    </div>
  )
}

export default App