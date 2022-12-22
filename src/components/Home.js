import React from 'react'
import {useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import {Row,Col} from 'react-bootstrap'

function Home() {
    const [restaurants,setRestaurants] = useState([])
    async function fetchData(){
        await fetch('./restaurants.json')
        .then((res)=>res.json())
        .then((data)=>setRestaurants(data.restaurants))
    }
   useEffect(()=>{
    fetchData()
   },[])
   console.log(restaurants);
  return (
    <Row>
        {restaurants ? (restaurants.map(restaurant=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <RestaurantCard item={restaurant}/>
          </Col>
        ))) : null}
      
    </Row>
  )
}

export default Home