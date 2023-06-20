import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event)=> {
    setPersons(persons => [...persons,{"name":newName}])
    event.preventDefault()
    setNewName('')
  } 

  const handleChange = (event)=> {
    setNewName(event.target.value)
  } 

  const Display = ()=>{
    return (<div>{JSON.stringify(persons)}</div>)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form id="myform" onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,i) => <li key={i}>{person.name}</li>)}
     </ul>
     <Display/>
     </div>
  )
}

export default App