import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',"number" :9999999 }
  ]) 

  const [filteredPersons, setFilteredPersons] = useState([
    { name: '' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event)=> {
    const inlist = persons.filter(item => item.name === newName)
    console.log(inlist)
    if(inlist.length > 0){
      alert(`${newName} already in list`)
    }else{
      setPersons([...persons,{"name":newName ,"number":newNumber}])
    }
    
    event.preventDefault()
    setNewName('')
    setNewNumber('')
  } 

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  } 

  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  } 

  const handleFilteredChange = (event)=> {
    setNewFilter(event.target.value)
    setFilteredPersons(persons.filter(item => item.name.includes(newFilter)))
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter: <input value={newFilter} onChange={handleFilteredChange}/>
        </div>
      <form id="myform" onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,i) => <li key={i}>{person.name + " " + person.number}</li>)}
     </ul>
      <ul>
        {filteredPersons.map((person,i) => <li key={i}>{person.name + " " + person.number}</li>)}
      </ul>  
     </div>
  )
}

export default App