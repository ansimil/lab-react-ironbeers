import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Beers = () => {

const [beers, setBeers] = useState([])
const [search, setSearch] = useState('')
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'
console.log(apiURL)

useEffect(() => {
    axios.get(apiURL)
    .then(response => {
        setBeers(response.data)
        console.log(response.data)
    })
    .catch(err => console.log(err))
    // eslint-disable-next-line 


}, [])

const searchFunc = (e) => {
    setSearch(e.target.value)
    axios.get(`${apiURL}/search?q=${e.target.value}`)
    .then(response => {
        if (response.data.length > 0){
            setBeers(response.data)
        }
      
    })
}

if(beers.length === 0){ 
    return  <>
              <h3>List of beers</h3>
              <p>Loading...</p>
            </>
  }

  return (
    <div>
    <form >
       
       <label>Search beers</label>
      <input
        type="text"
        name="name"
        onChange={searchFunc}
        value={search}
      />

      </form>
    {beers.map((beer)=>{
        return (
            <div>
            <img src={beer.image_url} alt="no pic available" width="200"/>
            <h3>{beer.name}</h3>
            <h5>{beer.tagline}</h5>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Beer details</Link>
            </div>
        )

    })}
   
    </div>
  )

}

export default Beers