import { useState } from 'react';
import {TextField,Button,MenuItem} from '@mui/material';
import { useFormik } from 'formik';
import {updateData,addedData} from "../../../services/services"
import { useStyles } from "./style";

const socialmedia = [
    {
      value: 1,
      label: 'اینستاگرام',
    },
    {
      value: 2,
      label: 'تلگرام',
    },
    {
      value: 3,
      label: 'توییتر',
    },
    {
      value: 4,
      label: 'فیسبوک',
    },
    {
      value: 5,
      label: 'لینکدین',
    },
    {
      value: 6,
      label: 'وبسایت',
    },
  ];

type Props = {
    setEdit?:any,
    edit?: boolean,
    setExpanded?: any,
    editData:any,
};
const Index = ({setEdit,edit,setExpanded,editData}: Props) => {
    const [updateListData, setUpdateListData] =useState<boolean>(false);
    const classes = useStyles();
    const handleCancle=()=>{
        setExpanded(false)
        setEdit(false)
    }
    const formik = useFormik({
        initialValues: {
          social: edit? editData.social : '',
          link:edit ? editData.link: '',
          social_id:edit ? editData.social_id: ''
        },
        onSubmit: values => {
          if(edit){
            updateData(editData.id,values).then((res:any)=>{                
                    setExpanded(false)
                    setUpdateListData(!updateListData)
                    setEdit(false)                
            })
          }else{
            addedData(values).then((res:any)=>{               
                    formik.resetForm()
                    setExpanded(false)
                    setUpdateListData(!updateListData)
                
            })
          }
        },
      });

  return <div>
        <form autoComplete="off" className={classes.form} onSubmit={formik.handleSubmit}>
            <div className={classes.title}>{edit ? "ویرایش مسیر ارتباطی" : "افزودن مسیر ارتباطی"}</div>
            <div className={classes.input}>
            <TextField 
                id="outlined-secondary" 
                label="نوع"  
                variant="outlined" 
                value={formik.values.social} 
                onChange={formik.handleChange} 
                name='social'
                select 
                required>
                    {socialmedia.map((option:any) => (
                       <MenuItem key={option.value} value={option.value}>
                         {option.label}
                       </MenuItem>
                    ))}
            </TextField>
            <TextField id="outlined-secondary" label="لینک"  variant="outlined"  name='link' value={formik.values.link} onChange={formik.handleChange} />
            <TextField id="outlined-secondary" label="آی دی (ID)"  variant="outlined" name='social_id' value={formik.values.social_id} onChange={formik.handleChange} />
            </div>
            <div className={classes.FormBtn}>
                <Button variant="outlined" color="inherit" onClick={handleCancle}> انصراف</Button>
                <Button  type="submit"
                         sx={{backgroundColor:"#ffcf33",mr:1,fontFamily:"iransans", fontSize:"10px",boxShadow:"0px 10px 33px -7px rgba(255,207,51,0.44)" ,color:"#191919", ":hover":{backgroundColor:"#bc7123"}}} 
                         className={classes.okBtn}> 
                         {edit ? "ویرایش مسیر ارتباطی" : "افزودن مسیر ارتباطی"}
                </Button>

            </div>
        </form>
  </div>;
};

export default Index;