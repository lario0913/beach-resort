import React from 'react'
import Room from '../pages/Room'

function RoomList({rooms}) {
    if(rooms.length === 0){
        <div className="empty-search">
            <h3>
                Unfortunately, no rooms matched your search
            </h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomlist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}

export default RoomList
