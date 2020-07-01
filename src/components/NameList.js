import React from 'react'
import Person from './Person'

function NameList() {

    const persons=[
        {
            name:'kapil',
            age:22,
            movie:'anv'
        },
        {
            name:'ssamm',
            age:24,
            movie:'fnv'
        }
        ,
        {
            name:'pavi',
            age:23,
            movie:'eanv'
        }
    ]

 const personList=persons.map(person=>(<Person person={person}></Person> ))
        return <div>{personList}</div> }



export default NameList
