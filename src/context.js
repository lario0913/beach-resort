import React, { Component } from 'react'
import items from "./data"

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        FeaturedRooms: [],
        loading: true
    }

    componentDidMount(){
        let rooms = this.formatData(items)
        let FeaturedRooms = rooms.filter(room => room.featured === true)
        this.setState({
            rooms,
            sortedRooms: rooms,
            FeaturedRooms,
            loading: false
        })
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {
                         ...item.fields,
                         images: images,
                         id: id
                        }
            return room
        })
        return tempItems
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomContext, RoomConsumer}
