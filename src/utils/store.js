import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatterSlice from './chatterSlice';


const store= configureStore({
reducer:{
    app:appSlice,
    search: searchSlice,
    chat: chatterSlice,
    
    
}
});

export default store;