import React from 'react';

import './createRoom.css';

import NavbarComponent from '../Components/Navbar/NavbarComponent';
import hTTPBackend from '../../services/httpBackend';

export default class CreateRoomRoute extends React.Component {
    private async _createRoom () {
        let response = await hTTPBackend.createRoom()
        window.location.href = '/session/' + response.roomID;
    }

    render() {
        return <div className="CreateRoom" onLoad={this._createRoom}>
            <NavbarComponent/>
            <div className='mainContent'>
                <h1 className='header'>PlayShare</h1>
                <h2 className='subheader'>Please wait...</h2>
            </div>
        </div>
    }
}