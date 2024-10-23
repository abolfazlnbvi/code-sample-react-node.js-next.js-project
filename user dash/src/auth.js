
import * as React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { storage } from 'utils/baseUrl';
import PropTypes from "prop-types";
import { UserContext } from 'context/userContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Auth = ({ children }) => {
    const { decodefun, setToken, handleDashboard } = useContext(UserContext)
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true)

    storage.onConnect().then(function (children) {
        return storage.get('token');
    }).then(function (res) {
        setToken(res)
        decodefun(res)
        console.log("true");
        
        setLoading(false)
        handleDashboard(res)

    })['catch'](function (err) {
        console.log(err);

    });




    return (<div>
        <ToastContainer
            position="top-right"
            autoClose
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        {isLoading == true ?
            <h1>loading</h1>
            :
            children}
    </div>
    )


    /* 
    
    xs={0}
    sm={0}
    md={3}
    lg={2}
    xl={2}
    
    
    
    */


}

Auth.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Auth;
