const URL='https://docappback.onrender.com'

// const URL = 'http://localhost:4000'

// export const register = (data) => {
//     return fetch(`${URL}/user/register`, {

const login=(data)=>{
console.log("from server"+data.email+data.password);
   return fetch(`${URL}/user/login`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
   })
   
}
export {login}


export const signup=(data)=>{
    console.log(data);
    return fetch(`${URL}/user/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)   
       
    })
}

export const createfolder=(data)=>{
    console.log(data);
    return fetch(`${URL}/folder/create`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem("token")  
        },
        body:JSON.stringify(data)       
    })
}
export const getfolders=()=>{
    return fetch(`${URL}/folder/find`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",  
        },
    })
}

//deleting folder using name coz name is unique
export const deletefolder=(name)=>{
    console.log(name);
    return fetch(`${URL}/folder/delete/${name}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem("token")   
        },          
    })  
}
