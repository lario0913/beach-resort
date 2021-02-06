import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms startinh at $299">
                    <Link className="btn-primary" to="/rooms" >
                        our rooms
                    </Link>
            </Banner>
        </Hero>
    )
}

export default Home
