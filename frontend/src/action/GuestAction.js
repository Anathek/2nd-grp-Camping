
import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import * as actionConstants from '../dispatcher/GuestConstants'

export const recordGuest = ({GuestName,GuestPhone,GuestEmail,GuestAddress}) =>{
    axios.post('/guests/record',
        {
            name : GuestName,
            email: GuestEmail,
            phone : GuestPhone,
            address : GuestAddress
        });
}
export const fetchGuests = () =>{

    axios.get('/guests/').then((resp)=>{
        dispatcher.dispatch({
            action : actionConstants.refresh,
            payload: resp.data
        });
    })
}
