import axios from "axios";


export async function getjobPortal(){
    const reqUrl = "http://localhost:3001/portal/get-jobPortal";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}


export async function getjoblocation(){
    const reqUrl = "http://localhost:3001/portal/get-location";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}

export async function getjobskills(){
    const reqUrl = "http://localhost:3001/portal/get-skills";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}

export async function getjobDataAtDescription(){
    const reqUrl = "http://localhost:3001/portal/Desc";
    const result = await axios.get(reqUrl);
    console.log(result.data)
    if(result.data) {
        return result.data;
    }
}