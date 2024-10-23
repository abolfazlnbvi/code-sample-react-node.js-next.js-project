import React, { useRef, useState } from "react";
import "./FileUpload.css";
import axios from "axios";
import { baseUrlUpload } from "../../utils/baseUrl";
import { useContext } from "react";

import { AuthContext } from '../context/adminContext';
import { toast } from "react-toastify";


const FileUpload = (props) => {
    const inputRef = useRef();

    const { token, userId, setFiles , setUploaded,uploaded } = useContext(AuthContext)

    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [total, setTotal] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [uploadStatus, setUploadStatus] = useState("select");

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            props.loadImage(event.target.files[0])
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    const clearFileInput = () => {
        inputRef.current.value = "";
        setSelectedFile(null);
        setProgress(0);
        setUploadStatus("select");
    };

    const handleUpload = async () => {
        if (uploadStatus === "done") {
            clearFileInput();
            return;
        }

        try {
            setUploadStatus("uploading");

            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("userId", userId);
            formData.append("category", "img")
            const res = await axios.post(
                `${baseUrlUpload}/admin/upload/images`,
                formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        const load = Math.round(progressEvent.loaded /1048576)
                        const total = Math.round(progressEvent.total /1048576)
                        setProgress(percentCompleted);
                        setLoaded(load);
                        setTotal(total);
                        
                    },
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
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
            setUploaded([...uploaded, res.data])
            setUploadStatus("done");
        } catch (error) {
            setUploadStatus("select");
            console.log(error);
            console.log(error.response.data.message)
        }
    };

    return (
        <div className="file-body" onDrop={(e) => console.log(e.target.value)}>
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
            />

            {/* Button to trigger the file input dialog */}
            {!selectedFile && (
                <button className="file-btn" onClick={onChooseFile}>
                    <span className="material-symbols-outlined">upload</span> Upload File
                </button>
            )}

            {selectedFile && (
                <>
                    <div className="file-card">
                        <span className="material-symbols-outlined icon">{total}MB / {loaded}MB</span>

                        <div className="file-info">
                            <div style={{ flex: 1 }}>
                                <h6>{selectedFile?.name}</h6>
                                <div className="progress-bg">
                                    <div className="progress" style={{ width: `${progress}%` }} />
                                </div>
                            </div>

                            {uploadStatus === "select" ? (
                                <button onClick={clearFileInput}>
                                    <span class="material-symbols-outlined close-icon">
                                        close
                                    </span>
                                </button>
                            ) : (
                                <div className="check-circle">
                                    {uploadStatus === "uploading" ? (
                                        `${progress}%`
                                    ) : uploadStatus === "done" ? (
                                        <span
                                            class="material-symbols-outlined"
                                            style={{ fontSize: "20px" }}
                                        >
                                            check
                                        </span>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    </div>
                    <button className="upload-btn" onClick={handleUpload}>
                        {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
                    </button>
                </>
            )}
        </div>
    );
};

export default FileUpload;