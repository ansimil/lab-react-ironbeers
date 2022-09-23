import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const RandomBeer = () => {
    const [beer, setBeer] = useState([])
    const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

useEffect(() => {
    axios.get(`${apiURL}/random`)
    .then(response => setBeer(response.data))
    .catch(err => console.log(err))
    // eslint-disable-next-line 
}, [])
    
    if(beer.length === 0){ 
        return  <>
                <h3>Beer Details</h3>
                <p>Loading...</p>
                </>
    }

  return (
    <div>
    <a href="/random-beer">New Random Beer</a>
    <h3>Random Beer</h3>
    <h4>Beer Details</h4>
    <img src={beer.image_url} alt="no pic available" width="200"/>
    <h3>{beer.name}</h3>
    <h5>{beer.tagline}</h5>
    {beer.first_brewed && <h5>First Brewed: {beer.first_brewed}</h5>}
    {beer.attenuation_level && <h5>Attenuation Level: {beer.attenuation_level}</h5>}
    <p>Description: {beer.description}</p>
    {beer.contributed_by && <p>Contributed by: {beer.contributed_by}</p>}


    </div>
  )
}

export default RandomBeer