import React from 'react'
import { withRoomConsumer } from '../context'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import RoomList from './RoomList'

function RoomContainer({context}) {
    const {loading, rooms, sortedRooms} = context
    if(loading){
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)



// import React from 'react'
// import { RoomConsumer } from '../context'
// import RoomFilter from './RoomFilter'
// import Loading from './Loading'
// import RoomList from './RoomList'

// function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {rooms, loading, sortedRoom} = value
//                     console.log(loading)
//                     if(loading){
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             RoomContainer
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRoom} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomContainer
