import { useEffect, useState } from "react";
import Navbar from "../../comps/Navbar";
import axios from "axios";
import animedetails from "../details/[id]";
import { useRouter } from "next/router";
import Footer from "../../comps/Footer";
const watch = ({ info }) => {
  const router = useRouter();
  const { id } = router.query;
  const dmm =() =>{
    alert('so zebi mt9drch tchof prev ep t3 ep 1');
}
 
  return (

    
  
    <>
    <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      ></link>
      <Navbar />
      <br /><br />

      <div className="watch-container">
        <div className="owo">
          <div className="epss">
            {Array(366)
              .fill()
              .map((el, i) => (
                <p>
                  <a href={`http://localhost:3000/watch/query=%20${info[2]}%20&episode=${i+1}`}>{i+1 +'   ' +"الحلقة"}</a>
                </p>
              ))}
          </div>

          <div className="epo">
            <h1>{info[2] + "  :"} {info[1]} الحلقة </h1>

            <iframe src={info[0]} allowfullscreen="true"></iframe>
            <div className="next-prev">
              <a href={`http://localhost:3000/watch/query=${info[2]}&episode=${parseInt(info[1])-1}`}> <i class="uil uil-arrow-left"></i>  الحلقة السابقة </a>
              <a href=""> <i class="uil uil-arrow-to-bottom"></i> حمّل الحلقة </a>
              <a href={`http://localhost:3000/watch/query=${info[2]}&episode=${parseInt(info[1])+1}`}>الحلقة الموالية <i class="uil uil-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <br />

        
      </div>
      <br />
     
      
        <section>
      
                  <Footer />
             
        </section>
    </>
  );
};

export default watch;

export async function getServerSideProps({ params }) {
  // getting the id of the page then using it to fetch your data
  const { id } = params;
  const response = await axios.get(
    `http://localhost:5050/api/watch/anime?${id}`
  );
  const link = response.data.data.watch_link;
  const episode = response.data.data.episode;
  const name = response.data.data.anime_name;
  const res = await axios.get(
    `http://localhost:5050/api/search/anime?query=${name}`
  );
  const eps = res.data.data.data[0].episodes;
  const info = [link,episode,name, eps]

  return {
    // returning the data here and setting a key id so it fetches whenever the id changes
    props: {
      key: id,
      info,
    },
  };
}
