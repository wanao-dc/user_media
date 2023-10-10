import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker';

const updateUser = createAsyncThunk('users/update',async(user)=>{

   const response = await axios.put(`http://localhost:3005/users/${user}`,
   {
    name : faker.name.fullName(),
   });

   console.log(response,'response');
   
   return response.data;
})

export {updateUser};