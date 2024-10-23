import { createContext, useContext, useState, } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "utils/baseUrl";
import { toast } from "react-toastify";
7
// The Argon Dashboard 2 MUI main context
const UserContext = createContext();

function UserContextProvider({ children }) {
    var ls
    var decoded;
    const decodefun = (ls) => {
        console.log({ls});
        if (ls) {
            decoded = jwtDecode(ls);
        } else {
            decoded = {
                user: {
                    isAdmin: false,
                    isLogin: false,
                    fullname: "",
                    userId: "",
                },
            };
        }
    };

    const [token, setToken] = useState();



    //user

    const [mode, setMode] = useState(false);
    const [admin, setAdmin] = useState();

    const [isLogin, setLogin] = useState();

    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [userId, setUserId] = useState();


    // ------ user ------ model ------
    const [buysUser, setBuyUser] = useState("");
    const [testResponse, setTestResponse] = useState("");
    const [wallet, setWallet] = useState("");


    const [comments, setComments] = useState("");

    // ------ Admin ------ 
    const [ads, setAds] = useState([]);
    const [oneAds, setOneAds] = useState([]);
    const [test, setTest] = useState([]);
    const [oneRequest, setOneRequest] = useState([]);
    const [request, setRequest] = useState([]);
    const [oneTest, setOneTest] = useState([]);
    const [exam, setExam] = useState([]);
    const [oneExam, setOneExam] = useState([]);
    const [blog, setBlog] = useState([]);
    const [oneBlog, setOneBlog] = useState({});
    const [users, setUsers] = useState([]);
    const [testQus, setTestQus] = useState([])
    const [admindash, setAdmindashboard] = useState([])
    const [files, setFiles] = useState('ارسال')
    const [progress, setProgress] = useState('ارسال')
    const [uploaded, setUploaded] = useState([])
    const [classes, setClass] = useState([])
    const [oneClass, setOneClass] = useState([])
    const [category, setCategory] = useState([])
    const [oneCategory, setOneCategory] = useState([])
    const [main, setMain] = useState([])
    const [dashboard, setDashboard] = useState({})

    const axiosJWT = axios.create();
    const navigate = useNavigate();
  
  
    const handleDashboard = async (inputs) => {

        if (inputs) {
    
    
          const res = await axiosJWT.get(
            `${baseUrl}/users/handledashboard`,
            {
              headers: {
                authorization: `Bearer ${inputs}`,
              },
            });
          if (res.data.code == 1) {
            setToken()
            navigate("/")
            
            
          } 

           
          
        
  
          
          console.log(res.data.code);
    
        }
    
    
    
      }

    const userdashboard = async () => {
        console.log("res.data", token);
        try {

            const res = await axiosJWT.get(`${baseUrl}/users/dashboard`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log({resdata: res.data});
            
            setDashboard(res.data)


        } catch (error) {
            throw error
         }
    }





    const upload = async (data) => {
        try {
            const formData = new FormData();

            formData.append("file", data.image);
            formData.append("userId", userId);
            formData.append("category", "img")
            const res = await axiosJWT.post(
                `${baseUrl}/admin/upload/images`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setProgress(percentCompleted);
                    },
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
            toast(res.data.text, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "light",
            });
            console.log(`${res.data.text}`);
            setFiles(res.data.fileName)
        } catch (error) {
            console.log(error);
            console.log(error.response.data.message)
        }
    };



    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................

    const getOne = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const add = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const edit = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const deletel = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) {
            throw error
         }
    };





    return (
        <UserContext.Provider
            value={{

                decodefun, 
                setToken,
                handleDashboard,
                userdashboard,
                dashboard




            }}
        >
            {children}
        </UserContext.Provider>
    )
};



// Argon Dashboard 2 MUI custom hook for using context
function useArgonController() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useArgonController should be used inside the ArgonControllerProvider.");
    }

    return context;
}

// Typechecking props for the ArgonControllerProvider
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    UserContextProvider,
    UserContext
};
