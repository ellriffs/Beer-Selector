import  '../styles/Search.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Search = () =>  {
    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        axios
        .get('https://api.punkapi.com/v2/beers/random')
        .then(res => setBeersData(res.data)
    )}, [])
    console.log(beersData)

    const handleOnClick = () => {
        window.location.reload(false)

    }
    return (
        <div className="search">
            <button className="button" type="button" onClick={handleOnClick} >Go Get That Beer</button>
                {beersData.map(beer =>{
                return(
                    <>
                    <h1 className="list-id" key={beer.id}>ID: {beer.id}</h1>
                    <h1 className="list-name" key={beer.name}>Name: {beer.name}</h1>
                    <h1 className="list-abv" key={beer.abv}>ABV: {beer.abv}%</h1>
                    <h1 className="first-brewed" key={beer.first_brewed}>First Brewed: {beer.first_brewed}</h1>
                    <h1 className="goes-with" key={beer.food_pairing}>Goes Well With: {beer.food_pairing}</h1>
                    <div className="image-div">
                    <img className="beer-image" src={beer.image_url} alt={beer.name} />
                    </div>
                    </>
                )
            })}
            
        </div>
    )}



export default Search;