import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useFormik} from "formik";
import Button from '@mui/material/Button/Button';

export function App() {
    // const [age, setAge] = React.useState('')
    // console.log(age)
    //
    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value as string);
    // };

    const formik = useFormik({
        initialValues: {
         time:''
        },
        onSubmit: values => {
            alert(values.time);
        },
    })


    const generateTimeSteps = (): string[] => {
        const result: string[] = [];
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j <= 3; j++) {
                result.push(`${i < 10 ? '0' + i : i}:${j === 0 ? '00' : 15 * j}`);
            }
        }
        return result;
    }

    return (

        <Box sx={{ width:'100px',marginTop:'10px',marginLeft:'10px' }}>
            <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">time</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="time"
                    {...formik.getFieldProps('time')}
                    // onChange={handleChange}
                >

                    {generateTimeSteps().map(m=>{
                        return <MenuItem key={m} value={m}>{m}</MenuItem>
                    })}
                </Select>
            </FormControl>
                <Button variant="contained" type={'submit'}>submit</Button>
            </form>
        </Box>
    );
}
