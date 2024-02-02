import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import Checkbox from '@mui/material/Checkbox';

const TodoForm = () => {
    const [todoList,setTodoList]=useState([]);

    const filterTask=(taskId)=>{
        const newTodoList=todoList.filter((item,index,self)=>{
            if (item.id!==taskId){
                return item;
            }

        }
    )
    setTodoList(newTodoList);
};

  return (
    <Box
        sx = {{
            width:"30vw",
            height:"auto",
            boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            alignSelf:"center",
            padding:"1rem"
        }}
    >
    <Formik
      initialValues={{ title: '', date: '' }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Title is Required'),
        date: Yup.string()
          .required('Date is Required'),
      })}
      onSubmit={(values)=>{
        values={...values,id:uuidv4()}
        setTodoList([...todoList,values])
      }}
    >
      {formik => (
        <form
            onSubmit={formik.handleSubmit}
            style={{display:"flex",flexDirection:"column", gap:"1rem"}}
        >
            <Typography variant='h4'>Add todo form</Typography>
            <TextField
                required
                label="Title"
                defaultValue="Go to gym"
                {...formik.getFieldProps("title")}
            />

          {formik.touched.title && formik.errors.title ? (
            <div style={{color:"red"}}>{formik.errors.title}</div>
          ) : null}


            <TextField
                required
                label="Date"
                defaultValue="Go 2023/01/01 gym"
                {...formik.getFieldProps("date")}
            />

          {formik.touched.date && formik.errors.date ? (
            <div style={{color:"red"}}>{formik.errors.date}</div>
          ) : null}

        <Button variant="outlined" color="success" type='submit' style={{marginTop:"2rem"}}>
            Add Task
        </Button>
        </form>
      )}
    </Formik>
    <Divider/>
    <ol>
    {
        todoList.map((item)=>{
            return (
                <li
                    key={item.id}
                    style={{display:"flex", justifyContent:"space-between"}}
                >
                    <Checkbox color="success" />
                    <Typography variant='h6' sx={{padding:"1rem"}}>
                    {`${item.title} at ${item.date}`}
                    </Typography>
                    <Button
                        sx={{width:"100px", color:"red"}}
                        onClick={()=>filterTask(item.id)}
                    >
                        <MdOutlineDeleteOutline size={30}/>
                    </Button>
                </li>

            );
        })
    }
    </ol>
    </Box>
  );
};

export default TodoForm;