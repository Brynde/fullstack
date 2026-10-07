const Persons = ({persons}) =>{

    const Person = ({person}) => {
        return(
            <div>
                <li>{person.name} {person.number}</li>
            </div>
        )
    }

    return(
        <div>
            {persons.map(person =>
                <Person key={person.name} person={person}/>
            )}
        </div>
    )
}

export default Persons