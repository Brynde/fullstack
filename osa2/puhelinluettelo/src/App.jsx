import { useState } from 'react'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const lowercaseName = newName.toLowerCase()

    if (persons.some(person => person.name.toLowerCase() === lowercaseName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const contactObject = {
      name: newName,
    }

    setPersons(persons.concat(contactObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons}/>
      </div>
    </div>
  )

}

export default App