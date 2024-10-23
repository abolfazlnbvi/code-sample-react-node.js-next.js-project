import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";

export const logout = () => {
    localStorage.removeItem("token")
    setLogin(false)

}
export const login = async (inputs) => {
    try {

        console.log(inputs);
        const res = await axios.post(`${baseUrl}/users/login`, inputs);
    
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

        } else {
            localStorage.setItem("token", res.data.token);


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

export const register = async (inputs) => {
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

    } catch (error) {
        console.log(error);
    }
};
export const handleDashboard = async (inputs) => {
    if (token) {
        console.log(token);

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

export const getAllAds = async () => {
    try {
        const res = await axiosJWT.get(`${baseUrl}/ads`);
        setAds(res.data)
    } catch (error) {
        console.log(error);
    }
};

export const getAllAdsByPlaceActive = async (data) => {
    try {
        console.log(data);
        const res = await axiosJWT.get(`${baseUrl}/ads/place/${data}`);
        setAds(res.data)
        console.log(res.data.place);
    } catch (error) {
        console.log(error);
    }
};

export const getAllAdsByCategoryActive = async (data) => {
    try {
        const res = await axiosJWT.get(`${baseUrl}ads/category/${data.id}`);
        setAds(res.data)
    } catch (error) {
        console.log(error);
    }
};



export const getOneAdsActive = async () => {

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

export const getAllTestActive = async () => {
    try {
        const res = await axios.get(`${baseUrl}/test`);
        setTest(res.data)
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

export const getOneTestActive = async (data) => {

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

export const getAllQuestionActive = async (data) => {

    try {
        const res = await axiosJWT.get(`${baseUrl}/test/question/bytest/${data.id}`, {
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
export const getOneQuestion = async () => {

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

export const getOneUser = async (data) => {

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
export const editUser = async (data) => {

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

export const userdashboard = async () => {

    try {

        const res = await axiosJWT.post(`${baseUrl}/admin/admindashboard`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });


        setUserdashboard(res.data)
    } catch (error) { }
}





export const upload = async (data) => {
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


export const getAllBlogActive = async () => {
    try {

        const res = await axiosJWT.get(`${baseUrl}/blog`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        if (res.data.blog) {
            return res.data.blog
        }  
           
            
     
        
    } catch (error) { }
};
export const getActivesBlog = async () => {
    try {

        const res = await axiosJWT.get(`${baseUrl}/blog/active`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });



    } catch (error) { }
};
export const getOneBlogActive = (data) => {
    try {
        console.log(data);
        const res = axiosJWT.get(`${baseUrl}/blog/${data.id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        if (res.data.blog) {
            console.log("55");
            return res
            
        }  
           
            
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

        console.log(res.data.blog)


    } catch (error) { }
};


//.........................................................................
//.........................................................................
//.........................................................................
//.........................................................................
//.........................................................................
//.........................................................................
//.........................................................................

export const getAllUploaded = async () => {
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



export const getAllClassActive = async () => {


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

export const getAllClassBycapacityActive = async (data) => {


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


export const getOneClassActive = async (data) => {
    try {

        const res = await axiosJWT.post(`${baseUrl}/admin/class${data.id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });



    } catch (error) { }
};


export const signInClass = async (data) => {
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


export const cancelClass = async (data) => {
    try {

        const res = await axiosJWT.post(`${baseUrl}/admin/class/${data.id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });



    } catch (error) { }
};
