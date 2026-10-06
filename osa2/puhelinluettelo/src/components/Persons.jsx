const Persons = ({persons}) =>{

    const Person = ({person}) => {
        return(
            <div>
                <li>{person.name}</li>
            </div>
        )
    }

    return(
        <div>
            {persons.map(person =>
                <Person key={person.id} person={person}/>
            )}
        </div>
    )
}

export default Persons