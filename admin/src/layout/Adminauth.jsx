
import * as React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../admin/context/adminContext';
import { useContext } from 'react';
import Admindashbord from '../admin/adminDashbord';
import { useEffect } from 'react';

import { useState } from 'react';
import { storage } from '../utils/baseUrl';


const AdminAuth = ({ children }) => {
    const { admin, handleDashboard, decodefun, setToken } = useContext(AuthContext)
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true)

    storage.onConnect().then(function (children) {
        return storage.get('token');
    }).then(function (res) {
        setToken(res)
        decodefun(res)
        setLoading(false)

    })['catch'](function (err) {
        console.log(err);

    });




    return (<div>
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
export default AdminAuth;
