import { useEffect, useState } from "react";
import { useStyles } from "./style";
import {getAllDatas} from '../../services/services'
import {FiPlus} from "react-icons/fi"
import {FaPen} from "react-icons/fa"
import CardUserInfo from "../Main/CardUserInfo/Index"
import { Collapse } from '@mui/material';
import Form from '../Main/Form/Index'

type Props = {};

const Index = (props: Props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<boolean>(false);
    const [edit , setEdit]=useState<boolean>(false);
    const [updatePage , setUpdatePage]=useState<boolean>(false);
    const [data , setData]=useState<Array<object>>();
    const [editData , setEditData]=useState<Array<object>>();

useEffect(()=>{
    getAllDatas().then((res:any) =>{
        setData(res.data)
    })
},[expanded,updatePage])
console.log(data);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <div>
      <div>
            <h3>حساب کاربری</h3>
      </div>
      <div className={classes.addres}>
            <div> خانه   .</div>
            <div> کاربر   .</div>
            <div className={classes.noActive}> تنظیمات کاربری</div>
      </div>
      <div className={classes.formContaner}>
            <div className={classes.mainFromTitle}>مسیرهای ارتباطی</div>
            <div className={classes.addUserBtn} onClick={handleExpandClick} aria-expanded={expanded}>
                {!edit ? <div><FiPlus/> افزودن مسیر ارتباطی</div>  : <div><FaPen/> ویرایش مسیر ارتباطی</div>}                
            </div>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.userForm}>
               <Form setExpanded={setExpanded} setEdit={setEdit} edit={edit} editData={editData} />
            </Collapse>

            <div className={classes.userList}>
                {data?.map((info:any,index)=>(                    
                    <CardUserInfo setEdit={setEdit} data={info} key={index} setOpen={setExpanded} setEditData={setEditData} updatePage={updatePage} setUpdatePage={setUpdatePage}/>
                ))}
            </div>
      </div>

      
  </div>
};

export default Index;
