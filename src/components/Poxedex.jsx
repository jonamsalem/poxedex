import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import DisplayPokemon from './DisplayPokemon'
function Poxedex({ name }) {

  // stores data from the fetch
  let [data , setData] = useState([])
  // flag handles the race cinditions of fetch
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    // prevents fetch trigerring before it has pokemon value
    if (name != ""){
      // Flag that stops execution of a console.log or other data append
      setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      // allows execution 
      setLoading(false)
      loading? null: console.log(data)
    })
    .catch(err => console.log(err))
  }
  // dependency causes useEffect trigger when name value changes
  },[name] )


// Return statements only allow expressions
// Expressions only allow singular values to be expressed
//That's why we wrap them in () and Fragements <> </>
  return (
    <>{ data == ""
        ? <Loading />
        : ( <DisplayPokemon data={data} />
        )
    }</>
  )
  }
export default Poxedex