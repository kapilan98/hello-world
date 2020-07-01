import React from 'react'

function Person({person}) {
    return (
        <div>
               <h2>My name is :{person.name}, I am {person.age} years old, and I like
                the movie {person.movie}.</h2>
        </div>
    )
}

 export default Person
                