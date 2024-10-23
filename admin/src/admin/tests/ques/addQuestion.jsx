import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminAddQuestion from './addQues';
import Question from '../questions';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/adminContext';
import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  

    // Simple format
     // { jy: 1395, jm: 1, jd: 23 });
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

const AdminTestAddQuestion = () => {
    const [value, setValue] = React.useState(1);
    const location = useLocation()
    
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { getAllQuestion, testQus } = useContext(AuthContext)
console.log("1");
    
    useEffect(() => {
        console.log(`AdminTestAddQuestion: ${location.state.id}`);
        getAllQuestion({ id: location.state.id })
        console.log(`getAllQuestion: ${location.state.id}`);
        console.log({log: {testQus}});

    }, [])

console.log("2");
    return (
        <Box sx={{
            width: '100%',
            marginTop: "100px"
        }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "100%" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="سوالات" {...a11yProps(0)} />
                    <Tab label="اضافه کردن سوال" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AdminAddQuestion />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={3}>

                    {testQus.map((data, index) => (
                        <Grid xs={12} md={6} lg={4} >

                            <Question 
                            answer={data.answer}
                             categories={data.categories}
                             createdAt={data.createdAt}
                             idTest={data.idTest}
                             isActive={data.isActive}
                             question={data.question}
                             id={data._id}
                             v={data.__v}
                             testid={location.state.id}
                             
                             />
                        </Grid>
                    ))}
                </Grid>
            </CustomTabPanel>

        </Box>
    );
}


// answer
// : 
// ['gggggg']
// categories
// : 
// "ggggggg"
// createdAt
// : 
// "2024-04-26T16:42:41.364Z"
// idTest
// : 
// "66015041ea18b678bc7d4e95"
// isActive
// : 
// true
// question
// : 
// "gggggggg"
// __v
// : 
// 0
// _id
// : 
// "662bd981554763df956f5c1a"



export default AdminTestAddQuestion