import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/baseUrl";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { CrossStorageHub } from "cross-storage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const router = useRouter()
    CrossStorageHub.init([
        { origin: /localhost:3000$/, allow: ['get', "del"] },
        { origin: /localhost:10688$/, allow: ['get', 'set', 'del'] },
        { origin: /localhost:3001$/, allow: ['get', 'set', 'del'] },
        { origin: /localhost:3002$/, allow: ['get', 'set', 'del'] },
        { origin: /localhost:3003$/, allow: ['get', 'set', 'del'] },
    ]);
    const [cookies, setCookie, removeCookie] = useCookies(['mode']);

    var ls = typeof window !== 'undefined' ? localStorage.getItem('token') : 'dd'
    var decoded;
    const decodefun = () => {
        if (ls) {
            decoded = typeof window !== 'undefined' ? jwtDecode(localStorage.getItem('token')) : {};
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
    decodefun();

    const [token, setToken] = useState(typeof window !== 'undefined' ? localStorage.getItem('token') : []);




    //user

    const [admin, setAdmin] = useState(typeof window !== 'undefined' ? decoded.user.isAdmin : false);

    const [isLogin, setLogin] = useState(typeof window !== 'undefined' ? decoded.user.isLogin : false);

    const [error, setError] = useState("");
    const [name, setName] = useState(typeof window !== 'undefined' ? decoded.user.fileName : []);
    const [userId, setUserId] = useState(typeof window !== 'undefined' ? decoded.user.userId : []);


    // ------ user ------ model ------
    const [buysUser, setBuyUser] = useState("");
    const [testResponse, setTestResponse] = useState("");
    const [wallet, setWallet] = useState("");

    const [mode, setMode] = useState("");

    const [comments, setComments] = useState("");

    // ------ Admin ------ 
    const [ads, setAds] = useState([]);
    const [test, setTest] = useState([]);
    const [oneTest, setOneTest] = useState([]);
    const [blog, setBlog] = useState([]);
    const [oneBlog, setOneBlog] = useState([]);
    const [testQus, setTestQus] = useState([])
    const [userdash, setUserdashboard] = useState([])
    const [files, setFiles] = useState('ارسال')
    const [progress, setProgress] = useState('ارسال')
    const [uploaded, setUploaded] = useState([])
    const [classes, setClass] = useState([])



    //    useEffect( () => {
    //      setToken(cookies.token)
    //     setToken( jwt_decode(cookies.token))

    //     console.log(token);
    //     setAdmin(cookies.token)
    // }, []);

    const axiosJWT = axios.create();

    // toast.error(res.data.msg, {
    //   position: "top-right",
    //   autoClose: 1000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });

    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................


    const removeLocalStrage = (value, res) => {
        if (res.data.VarifyToken = false) {

            localStorage.removeItem(value)
            toast.error(res.data.Massage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
    }


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................



    const logout = () => {
        localStorage.removeItem("token")
        setLogin(false)
        router.push('/login')


    }
    const login = async (inputs) => {
        try {

            const res = await axios.post(`${baseUrl}/users/login`, inputs);

            decodefun();
            if (res.data.error) {
                logout()
                setError(res.data.error);
                toast.error(res.data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            } else {
                typeof window !== 'undefined' ? localStorage.removeItem("token") : []
                typeof window !== 'undefined' ? localStorage.setItem("token", res.data.token) : []

                setAdmin(res.data.isAdmin);

                setToken(res.data.token);
                setLogin(res.data.isLogin);


                toast.info("خوش آمدید", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push('/')
            }


        } catch (error) {

        }
    };

    const register = async (inputs) => {
        try {

            const res = await axios.post(`${baseUrl}/users/register`, inputs);
            if (res.data.error) {
                toast.error(res.data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.success(res.data.Massage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push('/login')
            }
        } catch (error) {

        }
    };
    const handleDashboard = async (inputs) => {
        if (token) {


            const res = await axiosJWT.get(
                `${baseUrl}/handledashboard`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
            if (res.data.code === 1) {


                localStorage.removeItem("token")
                setLogin(false)


            }

            toast.warning(res.data.Message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }



    }

    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //ADS

    const getAllAds = async () => {
        try {
            const res = await axiosJWT.get(`${baseUrl}/ads`);
            setAds(res.data)
        } catch (error) {

        }
    };

    const getAllAdsByPlaceActive = async (data) => {

        try {

            const res = await axiosJWT.get(`${baseUrl}/ads/place/${data}`);
            setAds(res.data)
        } catch (error) {

        }
    };

    const getAllAdsByCategoryActive = async (data) => {
        try {
            const res = await axiosJWT.get(`${baseUrl}ads/category/${data.id}`);
            setAds(res.data)
        } catch (error) {

        }
    };



    const getOneAdsActive = async () => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/ads/${userId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            removeLocalStrage('token', res)
            setAds(res.data)


        } catch (error) { }
    };


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................


    // test .......................................................

    const getAllTestActive = async () => {
        try {
            const res = await axios.get(`${baseUrl}/test/active/true`);
            setTest(res.data.test)
            console.log(res.data);
        } catch (error) {

        }
    };

    const getOneTestActive = async (data) => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/test/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            removeLocalStrage('token', res)
            setOneTest(res.data)
        } catch (error) { }
    };


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................

    // Question .................................................

    const getAllQuestionActive = async (data) => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/test/question/bytest/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setTestQus(res.data.getQuestionByTest)

        } catch (error) {

        }
    };
    const getOneQuestion = async () => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/test/question/${userId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            removeLocalStrage('token', res)
            setAds(res.data)



        } catch (error) { }
    };


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................

    const getOneUser = async (data) => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/user/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            removeLocalStrage('token', res)
            setAds(res.data)



        } catch (error) { }
    };
    const editUser = async (data) => {

        try {
            const res = await axiosJWT.get(`${baseUrl}/user/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            removeLocalStrage('token', res)
            setAds(res.data)



        } catch (error) { }
    };
    //....................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................

    //....................................................................................

    const userdashboard = async () => {

        try {

            const res = await axiosJWT.post(`${baseUrl}/admin/admindashboard`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });


            setUserdashboard(res.data)
        } catch (error) { }
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

            setFiles(res.data.fileName)
        } catch (error) {

        }
    };

    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................


    const getAllBlogActive = async () => {
        try {

            const res = await axiosJWT.get(`${baseUrl}/blog`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setBlog(res.data.blog)
        } catch (error) { }
    };
    const getActivesBlog = async () => {
        try {

            const res = await axiosJWT.get(`${baseUrl}/blog/active`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };
    const getOneBlogActive = async (data) => {
        try {
            const res = await axiosJWT.get(`${baseUrl}/blog/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            res.data.blog ?
                setOneBlog([res.data.blog])
                :
                toast.success(res.data.Message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });




        } catch (error) { }
    };


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................

    const getAllUploaded = async () => {


        try {

            const res = await axiosJWT.get(`${baseUrl}/admin/upload`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setUploaded(res.data.image)
        } catch (error) { }
    };


    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................



    const getAllClassActive = async () => {


        try {

            const res = await axiosJWT.get(`${baseUrl}/class`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });


            setClass(res.data.classes)
        } catch (error) { }
    };

    const getAllClassBycapacityActive = async (data) => {


        try {

            const res = await axiosJWT.get(`${baseUrl}/admin/class/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setClass(res.data)
        } catch (error) { }
    };


    const getOneClassActive = async (data) => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin/class${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const signInClass = async (data) => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/class`, data, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            toast.success(res.data.Message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setClass([...classes, res.data.classes])

        } catch (error) { }
    };


    const cancelClass = async (data) => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin/class/${data.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };



    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................



    const getAllMyReuest = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const getOneMyRequest = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };
    const addRequest = async (data) => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/request`, data, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data);
            setError([])
            setError(res.data)
            res.data.code == 1 ? (
                router.push('/login')
            ) : console.log(res.data.code);



        } catch (error) {
            console.log(error);



        }
    };




    const editRequest = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };


    const deleteRequest = async () => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/admin`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });



        } catch (error) { }
    };

    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................
    //.........................................................................



    const getBuyed = async (data) => {


        try {

            const res = await axiosJWT.get(`${baseUrl}/buy/buyed/${data.requestId}/${data.userId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return res.data


        } catch (error) {
            console.log(error);

        }
    };
    const buying = async (data) => {
        try {

            const res = await axiosJWT.post(`${baseUrl}/buy`, data, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data);
            setError([])
            setError(res.data)
            res.data.code == 1 ? (
                router.push('/login')
            ) : console.log(res.data.code);
            res.data.code == 200 ?
                toast.success(res.data.Message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                :
                ""
            getBuyed({ requestId: data.serviceId, userId })

        } catch (error) {
            console.log(error);



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



        } catch (error) { }
    };


    return (
        <UserContext.Provider
            value={{
                mode,
                setMode,
                decoded,
                admin,
                setAdmin,
                isLogin,
                setLogin,
                setToken,
                logout,
                error,
                setError,
                name,
                setName,
                userId,
                setUserId,
                buysUser,
                setBuyUser,
                comments,
                setComments,
                ads,
                setAds,
                test,
                setTest,
                oneTest,
                setOneTest,
                blog,
                setBlog,
                oneBlog,
                setOneBlog,
                testQus,
                setTestQus,
                userdash,
                files,
                setFiles,
                progress,
                setProgress,
                uploaded,
                setUploaded,
                classes,
                setClass,
                removeLocalStrage,
                login,
                register,
                handleDashboard,
                getAllAds,
                getAllAdsByPlaceActive,
                getAllAdsByCategoryActive,
                getOneAdsActive,
                getAllTestActive,
                getOneTestActive,
                getAllQuestionActive,
                getOneQuestion,
                getOneUser,
                editUser,
                userdashboard,
                upload,
                getAllBlogActive,
                getOneBlogActive,
                getAllUploaded,
                getAllClassActive,
                getAllClassBycapacityActive,
                getOneClassActive,
                signInClass,
                cancelClass,
                getAllMyReuest,
                getOneMyRequest,
                addRequest,
                editRequest,
                deleteRequest,
                getBuyed,
                buying






            }}
        >
            {children}
        </UserContext.Provider>
    )
};