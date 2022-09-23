import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewBeer = () => {

    const navigate = useNavigate()

    const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tip, setBrewers_tip] = useState('')
    const [attenuation_level, setAttentuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tip,
            attenuation_level,
            contributed_by 
        }
        console.log(newBeer)
        axios.post(`${apiURL}/new`, newBeer )
        .then(() => navigate('/beers'))
        .catch(err => console.log(err))
        // eslint-disable-next-line 
    } 

  return (
 
<div>
 <form onSubmit={handleSubmit} >
       
         <label>Name of beer</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
 
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>First brewed at</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        />

        <label>Brewer's Tip</label>
        <input
          type="text"
          name="brewers_tip"
          onChange={(e) => setBrewers_tip(e.target.value)}
          value={brewers_tip}
        />

        <label>Attentuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttentuation_level(e.target.value)}
          value={attenuation_level}
        />

         <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        />
        
        <button type="submit">Add Beer</button>
        
      </form>

    </div>
  )
}

export default NewBeer