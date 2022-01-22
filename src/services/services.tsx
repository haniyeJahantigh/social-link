import axios from 'axios'

const axiosConfig = axios.create({
    // .........  make baseURL .......
    baseURL: 'http://localhost:3030'
  });

export const getAllDatas = async () => {
    let res = await axiosConfig({
      method: "get",
      url: "/socials",
      headers: { "content-type": "application/json" },
    }).catch((err:any) => console.log(err));
    return res;
  };

/*
 * .......... get a data..........
 */
export const getADataById = async (id:number) => {
  let res = await axiosConfig({
    method: "get",
    url: `/socials/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err:any) => console.log(err));
  return res;
};

  /*
 *  ....... POST api for add a new data.........
 */
export const addedData = async (newData:any) => {
  try {
    let res = await axiosConfig({
      method: "post",
      url: "/socials",
      headers: { "content-type": "application/json" },
      data: newData
    })
    if (res.status === 201) {
      console.log("post data is ok");
    }
    console.log("post api", res);
    return res;
  } catch (err:any) {
     console.log(err) 
  };
}

/*
*  ..........PUT api for update data........... 
*/
export const updateData = async (id:number, updateData:any) => {
  try {
    let res = await axiosConfig({
      method: "put",
      url: `/socials/${id}`,
      headers: { "content-type": "application/json" },
      data: updateData,
    })
    return res;
  }
  catch (err:any) {
    console.log(err) 
  };
};
/*
*  ..........delete data........... 
*/
export const deleteData = async (id:number) => {
  try {
    let res = await axiosConfig({
      method: "delete",
      url: `/socials/${id}`,
    })
    return res;
  }
  catch (err:any) {
    console.log(err) 
  };
};