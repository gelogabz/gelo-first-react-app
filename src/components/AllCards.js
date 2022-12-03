import React from 'react'
import Card from './Card'
import one from '../assets/deptstore.jpg'
import two from '../assets/deptstore2.jpg'
import three from '../assets/deptstore3.jpg'
import four from '../assets/shoes.jpg'

const AllCards = () => {
    return (
        <section className="container d-flex justify-content-center mx-auto">
            <Card img={one} className="img-fluid" />
            <Card img={two} className="img-fluid" />
            <Card img={three} className="img-fluid" />
            <Card img={four} className="img-fluid" />
        </section>
    )
}

export default AllCards;