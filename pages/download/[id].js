


import axios from "axios";
import Navbar from "../../comps/Navbar";
import { useEffect, useState } from "react";
const download = ({servers}) => {
    const [serverss,setserverss] = useState([])
   
    useEffect(()=>{
        if(servers)

        setserverss(servers)

    },[]) 
    return (
       
        <>
        <Navbar/>
        <br />
        <br />
        <br />




        <div className="down_links">
            <br />
        <h1>روابط التحميل</h1>
<br /><br /><br />
<div className="dowlinks">
    {servers!==null?servers.map((item)=>(
                <a href={item.download_url}>{item.server}</a>
            )):null}
</div>
            
        </div>
        </>
     );
}
 
export default download;




export async function getServerSideProps({ params }) {
    // getting the id of the page then using it to fetch your data
    const { id } = params;
    const response =  await axios.get(`http://localhost:5050/api/download/anime?${id}`.replaceAll(' ','-'));
   
    const servers = response.data.download_links
   
    return {
      // returning the data here and setting a key id so it fetches whenever the id changes
      props: {
        key: id,
        servers,
      },
    };
  }
  