import React from "react";
import { useState } from "react";
import { useContext } from "react";

import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Slide from '@mui/material/Slide';

import './index.css'

import { useFormik } from "formik";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AuthContext } from "../context/adminContext";

import { toast } from "react-toastify";
import { baseUrlImage } from "../../utils/baseUrl";

import { FileUploader } from "react-drag-drop-files";
import FileUpload from "./uploadFile";
import Uploaded from "./uploaded";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const Upload = (prom) => {
  const { upload, files, setFiles } = useContext(AuthContext)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [preview, setPreview] = useState("")
  const [file, setFile] = useState();
  const [fileInfo, setFileInfo] = useState({});

  const loadImage = (e) => {

    let type
    type = e.name.lastIndexOf('.')
    type = e.name.substr(type)
    console.log(e);
    console.log(type
    )

    setFileInfo({
      name: e.name,
      type: type,
    })
    setFile(e)
    console.log(fileInfo);
    setPreview(URL.createObjectURL(e));
    setFiles(" تصویر تغییر کرد برای دریافت آدرس ارسال کنید")
  }







  return (
    <Box sx={{
      width: '95%',
      marginTop: '70px'
    }}>
      <Grid
        sx={
          {
            marginBottom: "50px"
          }
        }
      >



        <Dialog
          fullScreen
          open={prom.open}
          onClose={prom.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>

              <Button autoFocus color="inherit" onClick={prom.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="آپلود فایل" {...a11yProps(0)} />
              <Tab label="فایل های آپلود شده" {...a11yProps(1)} />

            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container sx={{
              justifyContent: "center",
              marginTop: "50px"
            }}>


              <FileUpload fileInfo={fileInfo} loadImage={loadImage} />

            </Grid>

            <List>
              <Divider />


              <Grid container sx={{
                justifyContent: "center"
              }} >
                <Grid md={5} sm={12}>
                  <ListItemButton onClick={() => {
                    navigator.clipboard.writeText(preview)
                    toast("آدرس کپی شد ", {
                      position: "bottom-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      theme: "light",
                    });
                  }}>
                    <ListItemText primary={preview ? preview : "ارسال"} secondary="آدرس اولیه" />
                  </ListItemButton>
                  <Divider />
                  {
                    preview ? (
                      <figure className="image-preview mt-3">
                        <img src={preview} width="250" alt="" />
                      </figure>

                    ) : <h3>لطفا اول تصویر را ارسال کنید</h3>
                  }
                </Grid>

                <Divider orientation="vertical" flexItem />


                <Grid md={5} sm={12}>
                  <ListItemButton onClick={() => {

                    navigator.clipboard.writeText(`${baseUrlImage}/${files}`)
                    toast("آدرس کپی شد ", {
                      position: "bottom-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      theme: "light",
                    });
                  }}>
                    <ListItemText
                      primary={`${baseUrlImage}/${files}`}
                      secondary="آدرس در هاست"
                    />
                  </ListItemButton>
                  <Divider />

                  {
                    files ? (
                      <figure className="image-preview mt-3">
                        <img src={`${baseUrlImage}/${files}`} width="250" alt="" />
                      </figure>
                    ) : ""
                  }

                </Grid>
              </Grid>

            </List>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Uploaded />
          </CustomTabPanel>


        </Dialog>

      </Grid>
    </Box>
  );
};

export default Upload;





