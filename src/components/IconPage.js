import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './IconPage.css'
import { useState } from 'react';

function IconPage() {
  const [active, setActive] = useState(false)
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        const results = json.filter((user)=> {
          return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
        })
        console.log(results)})
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <>
    <div className={active ? 'search active' : 'search'}>
      <input type='text' className='input' placeholder='....Type to search' value={input} onChange={(e) => handleChange(e.target.value)}></input>
      <button onClick={()=> setActive(!active)} className='btn btn-style'><FontAwesomeIcon className='icon-color' icon={faSearch} /></button>
    </div>
    <div className='result'> Search Result</div>
    </>
  )
}

export default IconPage