import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// export const postWritesThunk = createAsyncThunk(
//     "board/postWrites", //???
//     async (thunkAPI) => {
//         try{
//             const res = await axios.post(process.env.REACT_APP_API_BOARD);
//             return thunkAPI.fulfillWithValue(res.data);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );
export const postWritesThunk = createAsyncThunk(
    "write->db",
    async (ddd,thunkAPI) => {
        try{
            const response = await axios.post(
                process.env.REACT_APP_API_BOARD,
                ddd
            );
            console.log(response);
            // return thunkAPI.fulfillWithValue(response.response.response.response);
            // return response.data; 이거를 작성을 안해도 제대로 db들어간다
        } catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//ddd ddd을 둘다 써야만 db에 제대로 뜬다 why


export const Write = createSlice({
    name:"????",
    initialState:{},
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(postWritesThunk.pending,(state,action) => {})
        .addCase(postWritesThunk.fulfilled,(state,action) => {
            state.dat111a(action.payload)
        })
        .addCase(postWritesThunk.rejected,(state,action) => {})
    },
});

export default Write;



