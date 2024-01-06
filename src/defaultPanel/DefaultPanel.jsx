import Header from "./staticComponents/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./staticComponents/Footer/Footer";
import {useEffect} from "react";
import axios from "axios";
import {setServices} from "../data/reducers/serviceReducer";
import {useDispatch} from "react-redux";


const DefaultPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios("https://api.fenek.tech/registerPage/secondTemplate/services")
            .then(response => {
                dispatch(setServices(response.data.value));
            })
    }, []);
    return (
        <div class='test'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default DefaultPanel;
