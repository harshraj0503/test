import { configureStore } from "@reduxjs/toolkit";
import DashboardPage from "./Navbar";
import Slice from "./Slice";

const Store=configureStore({
    reducer:{
        dashboard:Slice,
    }
})
export default Store;