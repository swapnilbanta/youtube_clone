import { createSlice} from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./constants";

const chatterSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
})
export const {addMessage} = chatterSlice.actions;
export default chatterSlice.reducer;