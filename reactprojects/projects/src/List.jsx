import React from 'react'

const List = ({people}) => {
  return (
    <div>
        <center>
            {people.map((person)=>{
                return(
                    <article key={person.id}  className='person'>
                        <img src={person.image} alt='imag'/>  
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age}</p>
                        </div>
                    </article>
                )
            })}
        </center>

    </div>
  )
}

export default List