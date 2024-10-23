import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl, storage } from "../../utils/baseUrl";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {


  const [cookies, setCookie, removeCookie] = useCookies(['mode']);

  var ls






  var decoded;
  const decodefun = (ls) => {
    if (ls) {
      decoded = jwt_decode(ls);
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

  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log(token);



  //user

  const [mode, setMode] = useState(cookies.mode);
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



  //    useEffect( () => {
  //      setToken(cookies.token)
  //     setToken( jwt_decode(cookies.token))

  //     console.log(token);
  //     setAdmin(cookies.token)
  // }, []);

  const axiosJWT = axios.create();
  const navigate = useNavigate();


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
      navigate('/')
      return
    }
  }

  const chengeMode = () => {
    setMode(!mode)
    setCookie('mode', !mode)

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
    navigate("/")
  }

  const checkLogin = async () => {

    if (token) {

      setLogin(true)
      navigate("/dashboard")
      toast.error("خوش اومدی بخش کار هات چک کن", {
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
      toast.error("بدو بیا کلی کار داریم", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }
  const login = async (inputs) => {
    try {

      const res = await axios.post(`${baseUrl}/users/login`, inputs);
      console.log(inputs);
      decodefun();
      if (res.data.error) {

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

      } else if (res.data.isAdmin !== true) {
        navigate("/")
        logout()
        toast.warning("شما مجوز ورود ندارید", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        localStorage.setItem("token", res.data.token);
        setAdmin(res.data.isAdmin);

        setToken(res.data.token);
        setLogin(res.data.isLogin);

        navigate("/dashboard");

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
      }

    } catch (error) {
      console.log(error);
    }
  };

  const register = async (inputs) => {
    try {
      console.log(inputs);
      const res = await axios.post(`${baseUrl}/users/register`, inputs);
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        toast.success("ثبت نام موففقیت آمیز بود", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };


  const handleDashboard = async (inputs) => {

    if (token) {


      const res = await axiosJWT.get(
        `${baseUrl}/users/handleAdminDashboard`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      if (res.data.code == 1) {
        setToken()
        navigate("/")
        
        
      } else {
        
        
      }
      
      console.log(res.data.code);

    }



  }
  const getMainDashboard = async (data) => {



    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/users/main/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setMain(res.data)
    } catch (error) { }

  };



  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //ADS

  const createAds = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.post(
        `${baseUrl}/admin/handleads`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      removeLocalStrage('token', res)
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

      navigate("/dashboard/ads/list")

    } catch (error) {
      console.log(error)
    }
  };

  const editAds = async (data) => {
    try {

      const res = await axiosJWT.put(`${baseUrl}/admin/handleads/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Massage, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/ads/list")
      setAdmindashboard(res)
    } catch (error) { }
  };


  const getAllAds = async () => {
    console.log("fuke");
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/handleads`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setAds(res.data.ads)
      setAdmindashboard(res)
    } catch (error) { }

  };
  const setAdsIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/handleads/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAds(res.data.ads)


      setAdmindashboard(res)
    } catch (error) { }
  };

  const getAllAdsByPlace = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.get(`${baseUrl}/admin/ads/place/${data}`);
      setAds(res.data)
      console.log(res.data.place);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAdsByCategory = async (data) => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/admin/ads/category/${data.id}`);
      setAds(res.data)
    } catch (error) {
      console.log(error);
    }
  };



  const getOneAds = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/handleads/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setOneAds(res.data.ads)
      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteAds = async (data) => {

    try {
      console.log(data);
      const res = await axiosJWT.delete(`${baseUrl}/admin/handleads/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAds(res.data.ads)

      setAdmindashboard(res)
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
  const reqestRes = async (data) => {
    console.log(data);
    try {

      const res = await axios.put(
        `${baseUrl}/admin/request/res/${data.id}`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      // removeLocalStrage('token', res)
      console.log("150");
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
      console.log("151");
      console.log(res.data);
      console.log("152");

      navigate("/dashboard/request/list")

    } catch (error) {
      console.log(error)
    }
  };


  const setRequestIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/request/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.Message ? data.Message : res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setRequest(res.data.request)


      setAdmindashboard(res)
    } catch (error) { }
  };



  const getAllRequest = async () => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/request`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setRequest(res.data.request)
      setAdmindashboard(res)
    } catch (error) { }
  };


  const getOneRequest = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/request/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setOneRequest()
      setOneRequest(res.data)
      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteRequest = async (data) => {
    try {
      const res = await axios.delete(`${baseUrl}/admin/test/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },



      });
      console.log('147896317896321478630148632148632156321456');
      console.log(data.id);
      console.log(res.data);
      removeLocalStrage('token', res)
      getAllTest()
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

    } catch (error) {
      console.log(error)
    }
  };


  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................


  // test .......................................................
  const createTest = async (data) => {
    console.log(data);
    try {

      const res = await axios.post(
        `${baseUrl}/admin/test`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      // removeLocalStrage('token', res)
      console.log("150");
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
      console.log("151");
      console.log(res.data);
      console.log("152");

      navigate("/dashboard/test/list")

    } catch (error) {
      console.log(error)
    }
  };


  const editTest = async (data) => {
    console.log(data);
    try {
      const res = await axios.put(
        `${baseUrl}/admin/test/${data.id}`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      removeLocalStrage('token', res)
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
      setOneTest([])
      navigate("/dashboard/test/list")


    } catch (error) {
      console.log(error);
    }
  };



  const setTestIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/test/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.Message ? data.Message : res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTest(res.data.test)


      setAdmindashboard(res)
    } catch (error) { }
  };



  const getAllTest = async () => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/test`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setTest(res.data.test)
      setAdmindashboard(res)
    } catch (error) { }
  };
  const getActivesTest = async () => {
    try {
      const res = await axios.get(`${baseUrl}/admin/test/active`);
      setTest(res.data)
      console.log(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneTest = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/test/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setOneTest(res.data)
      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteTest = async (data) => {
    try {
      const res = await axios.delete(`${baseUrl}/admin/test/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },



      });
      console.log('147896317896321478630148632148632156321456');
      console.log(data.id);
      console.log(res.data);
      removeLocalStrage('token', res)
      getAllTest()
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

    } catch (error) {
      console.log(error)
    }
  };

  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................


  // Exam .......................................................
  const createExam = async (data) => {
    console.log(data);
    try {

      const res = await axios.post(
        `${baseUrl}/admin/test/exam/${data.testID}`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      // removeLocalStrage('token', res)
      console.log("150");
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
      console.log("151");
      console.log(res.data);
      console.log("152");

      navigate(`/dashboard/test/exam/list/${data.testID}`)

    } catch (error) {
      console.log(error)
    }
  };


  const editExam = async (data) => {
    console.log(data);
    try {
      const res = await axios.put(
        `${baseUrl}/admin/test/exam/${data.id}`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      removeLocalStrage('token', res)
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
      setOneExam([])
      navigate("/dashboard/test/list")


    } catch (error) {
      console.log(error);
    }
  };



  const setExamIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/test/exam/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.Message ? data.Message : res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setExam(res.data.exam)
      setOneTest(res.data.test)


      setAdmindashboard(res)
    } catch (error) { }
  };



  const getAllExam = async (data) => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/test/exam/all/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setExam([])
      setExam(res.data.test)
      setAdmindashboard(res)
    } catch (error) { }
  };

  const getOneExam = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/test/exam/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setOneExam([])
      setOneExam(res.data)
      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteExam = async (data) => {
    try {
      const res = await axios.delete(`${baseUrl}/admin/test/exam/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },



      });
      console.log('147896317896321478630148632148632156321456');
      console.log(data.id);
      console.log(res.data);
      removeLocalStrage('token', res)
      getAllExam(data.test)
      getOneTest(data.test)
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

    } catch (error) {
      console.log(error)
    }
  };


  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................

  // Question .................................................

  const getAllQuestion = async (data) => {

    try {
      const res = await axiosJWT.get(`${baseUrl}/admin/test/question/bytest/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTestQus(res.data.getQuestionByTest)
      console.log(res.data.getQuestionByTest);
      console.log({ getAllQuestion: { testQus } });

    } catch (error) {
      console.log(error);
    }
  };

  const createQuestion = async (data) => {
    console.log(data);
    try {

      const res = await axiosJWT.post(
        `${baseUrl}/admin/test/question`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      removeLocalStrage('token', res)

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
      console.log(` xcvbnm,./ ${res.data.id}`);
      getAllQuestion({ id: data.idTest })

    } catch (error) {
      console.log(error)
    }
  };


  const editQuestion = async (data) => {
    try {
      const res = await axiosJWT.put(
        `${baseUrl}api/admin/test/question/${userId}`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      removeLocalStrage('token', res)
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



    } catch (error) {
      console.log(error);
    }
  };


  const getOneQuestion = async () => {

    try {
      const res = await axiosJWT.get(`${baseUrl}/admin/test/question/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      removeLocalStrage('token', res)
      setAds(res.data)



    } catch (error) { }
  };


  const deleteQuestion = async (data) => {
    console.log(data);
    try {
      const res = await axiosJWT.delete(`${baseUrl}/admin/test/question/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },



      });


      removeLocalStrage('token', res)
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
      getAllQuestion({ id: data.testid })
      console.log(`navigate: ${data.testid}`);
    } catch (error) {
      console.log(error)
    }
  };


  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................


  //admin users context api ....................................................
  const getAllUser = async () => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/admin/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      removeLocalStrage('token', res)
      setUsers(res.data)

    } catch (error) {
      console.log(error);
    }
  };
  const getOneUserForAdmin = async (data) => {

    try {
      const res = await axiosJWT.get(`${baseUrl}/admin/user/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      removeLocalStrage('token', res)
      setAds(res.data)



    } catch (error) { }
  };
  const adminUser = async (data) => {

  };


  const addnumber = async (data) => {
    try {
      const res = await axiosJWT.post(`${baseUrl}/users/addnumber`, data);
      toast.info(res.data.Message, {
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
  }
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................

  //....................................................................................

  const admindashboard = async () => {

    try {

      const res = await axiosJWT.post(`${baseUrl}/admin/admindashboard`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      setAdmindashboard(res)
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


  const getAllBlog = async () => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/blog`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setBlog(res.data.blog)
      setAdmindashboard(res)
    } catch (error) { }
  };
  const getOneBlog = async (data) => {
    console.log(data);
    try {
      setOneBlog([])
      const res = await axiosJWT.get(`${baseUrl}/admin/blog/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setOneBlog(res.data.blog)
      setAdmindashboard(res)
    } catch (error) { }
  };
  const addBlog = async (data) => {
    try {

      const res = await axiosJWT.post(`${baseUrl}/admin/blog`, data, {
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
      setBlog([...blog, res.data.blog])
      navigate("/dashboard/blog/list")
      setAdmindashboard(res)
    } catch (error) { }
  };
  const editBlog = async (data) => {
    try {

      const res = await axiosJWT.put(`${baseUrl}/admin/blog/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOneBlog([])
      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/blog/list")
      setAdmindashboard(res)
    } catch (error) { }
  };

  const setBlogIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/blog/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setBlog(res.data.blog)


      setAdmindashboard(res)
    } catch (error) { }
  };

  const deleteBlog = async (data) => {
    try {

      const res = await axiosJWT.delete(`${baseUrl}/admin/blog/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setBlog(res.data.blog)

      setAdmindashboard(res)
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
    console.log("ok");

    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/upload`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data.image);
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



  const getAllClass = async () => {


    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/class`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      console.log(res.data);
      setClass(res.data)
    } catch (error) { }
  };

  const getAllClassBycapacity = async (data) => {


    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/class/${data.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setClass(res.data)
    } catch (error) { }
  };


  const getOneClass = async (data) => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/class/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOneClass(res.data.classes)
      console.log(res.data.classes);
      setAdmindashboard(res)
    } catch (error) { }
  };


  const addClass = async (data) => {
    try {

      const res = await axiosJWT.post(`${baseUrl}/admin/class`, data, {
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
      navigate("/dashboard/class/list")
      setAdmindashboard(res)
    } catch (error) { }
  };


  const editClass = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/class/${data.id}`, data, {
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
      setOneClass([])
      navigate("/dashboard/class/list")
      setAdmindashboard(res)
    } catch (error) { }
  };

  const setClassIsActive = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.put(`${baseUrl}/admin/class/isactive/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setClass(res.data.classes)


      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteClass = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.delete(`${baseUrl}/admin/class/${data.id}`, {
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
      setClass(res.data.classes)
      setAdmindashboard(res)
    } catch (error) { }
  };


  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................
  //.........................................................................


  const getAllCategory = async () => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/category`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setCategory(res.data.category)
      setAdmindashboard(res)
    } catch (error) { }
  };

  const getOneCategory = async (data) => {
    try {

      const res = await axiosJWT.get(`${baseUrl}/admin/category/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOneCategory(res.data.category)
      console.log(res.data.category)
      console.log(oneCategory)

      setAdmindashboard(res)
    } catch (error) { }
  };

  const getAllCategoryByfilter = async (data) => {
    try {


      const res = await axiosJWT.get(`${baseUrl}/admin/category/filter/${data.key}/${data.value}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.category);
      setCategory(res.data.category)

      setAdmindashboard(res.data)
    } catch (error) { }
  };


  const addCategory = async (data) => {
    try {
      console.log(data);
      const res = await axiosJWT.post(`${baseUrl}/admin/category`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data)
      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCategory([...category, res.data.category])

      setAdmindashboard(res)
    } catch (error) { }
  };


  const editCategory = async (data) => {
    try {

      const res = await axiosJWT.put(`${baseUrl}/admin/category/${data.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/category/list")
      setOneCategory([])
      setAdmindashboard(res)
    } catch (error) { }
  };


  const deleteCategory = async (data) => {
    try {
      console.log(data);
      console.log(userId);
      const res = await axiosJWT.delete(`${baseUrl}/admin/category/${data}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.Message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCategory(res.data.category)

      setAdmindashboard(res)
    } catch (error) { }
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


      setAdmindashboard(res)
    } catch (error) { }
  };


  const add = async () => {
    try {

      const res = await axiosJWT.post(`${baseUrl}/admin`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      setAdmindashboard(res)
    } catch (error) { }
  };


  const edit = async () => {
    try {

      const res = await axiosJWT.post(`${baseUrl}/admin`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      setAdmindashboard(res)
    } catch (error) { }
  };


  const deletel = async () => {
    try {

      const res = await axiosJWT.post(`${baseUrl}/admin`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });


      setAdmindashboard(res)
    } catch (error) { }
  };


  return (
    <AuthContext.Provider
      value={{
        decodefun,
        getMainDashboard,
        main,
        setMain,
        checkLogin,
        logout,
        login,
        register,
        setToken,
        mode,
        setMode,
        chengeMode,
        token,
        userId,
        name,
        isLogin,
        error,
        admin,
        admindash,
        admindashboard,
        uploaded,
        setUploaded,
        getAllUploaded,
        ads,
        setAds,
        setOneAds,
        oneAds,
        createAds,
        editAds,
        getAllAds,
        getOneAds,
        getAllAdsByCategory,
        getAllAdsByPlace,
        deleteAds,
        setAdsIsActive,
        test,
        createTest,
        editTest,
        getAllTest,
        setTestIsActive,
        getActivesTest,
        oneTest,
        getOneTest,
        deleteTest,
        createExam,
        editExam,
        setExamIsActive,
        getAllExam,
        getOneExam,
        deleteExam,
        exam,
        setExam,
        oneExam,
        setOneExam,
        createQuestion,
        editQuestion,
        getAllQuestion,
        testQus,
        getOneQuestion,
        deleteQuestion,
        users,
        getAllUser,
        getOneUserForAdmin,
        adminUser,
        addnumber,
        upload,
        files,
        setFiles,
        getAllBlog,
        getOneBlog,
        addBlog,
        editBlog,
        setBlogIsActive,
        deleteBlog,
        blog,
        setBlog,
        oneBlog,
        setOneBlog,
        handleDashboard,
        classes,
        setClass,
        addClass,
        editClass,
        setClassIsActive,
        deleteClass,
        getAllClass,
        getAllClassBycapacity,
        getOneClass,
        oneClass,
        setOneClass,
        category,
        setCategory,
        oneCategory,
        setOneCategory,
        getAllCategory,
        getAllCategoryByfilter,
        getOneCategory,
        addCategory,
        editCategory,
        deleteCategory,
        reqestRes,
        getAllRequest,
        getOneRequest,
        deleteRequest,
        setRequestIsActive,
        request,
        setRequest,
        oneRequest,
        setOneRequest
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};