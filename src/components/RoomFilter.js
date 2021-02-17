import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'


// GETTING UNINQUE VALUES
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        size,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    // GET UNIQUE TYPES
    let types = getUnique(rooms, "type");
    // ADD ALL
    types = ['all', ...types];
    // MAP RO JSX
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })


    // GET CAPACITY
    

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* SELECT TYPE */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type"
                        id="type"
                        value={type}
                        className="form-control select"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                {/* GUEST */}
                <div className="form-group">
                    <label htmlFor="capacity">room type</label>
                    <select 
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control select"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter
