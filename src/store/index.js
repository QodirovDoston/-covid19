import { configureStore } from "@reduxjs/toolkit";
import  { countSlice } from "../reducer/countSlice";


export default configureStore({reducer : countSlice})