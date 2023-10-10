import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, removeUser, updateUser } from "../index";


const usersSlice = createSlice ({
  name: 'users',
  initialState : {
    isLoading:false,
    data:[],
    error : null,
  },
  reducers:{},
  extraReducers(builder){
    builder.addCase(fetchUsers.pending,(state,action)=>{
      state.isLoading = true;     
    });

    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.isLoading = false;    
        state.data = action.payload;
    });
    
    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.isLoading = false;    
        state.error = action.error;     
    });
    
        //////////////////////**************////////

    builder.addCase(addUser.pending,(state,action)=>{
        state.isLoading = true;     
    });
  
    builder.addCase(addUser.fulfilled,(state,action)=>{
        state.isLoading = false;    
        state.data.push(action.payload);
    });
    
    builder.addCase(addUser.rejected,(state,action)=>{
        state.isLoading = false;    
        state.error = action.error;     
    });

    //////////////////////////////////////////////

    builder.addCase(removeUser.pending,(state,action)=>{
        state.isLoading = true;     
    });


    builder.addCase(removeUser.fulfilled,(state,action)=>{
        state.isLoading = false;  
        state.data = state.data.filter((user) => {
            return user.id !== action.payload;
        });     
    });    

    builder.addCase(removeUser.rejected,(state,action)=>{
        state.isLoading = false;    
        state.error = action.error;     
    });

    //////////////////////////////////////////////

    builder.addCase(updateUser.pending,(state,action)=>{
        state.isLoading = true;     
    });


    builder.addCase(updateUser.fulfilled,(state,action)=>{
        state.isLoading = false;  
        state.data = [...state.data, action.payload]
    });    

    builder.addCase(updateUser.rejected,(state,action)=>{
        state.isLoading = false;    
        state.error = action.error;     
    });


  },

})

export const usersReducer = usersSlice.reducer;