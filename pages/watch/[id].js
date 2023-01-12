import { useEffect } from "react";
import Navbar from "../../comps/Navbar";
import axios from "axios";
import animedetails from "../details/[id]";
import { useRouter } from "next/router";
import Footer from "../../comps/Footer";
const watch = ({ link }) => {
  const router = useRouter();
  const { id } = router.query;

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
            {Array(15)
              .fill(1)
              .map((el, i) => (
                <p>
                  <a>{i+1 + "الحلقة"}</a>
                </p>
              ))}
          </div>

          <div className="epo">
            <h1>Bleach الحلقة 7</h1>

            <iframe src={link} allowfullscreen="true"></iframe>
            <div className="next-prev">
              <a href="">الحلقة الموالية</a>
              <a href="">حمّل الحلقة </a>
              <a href="">الحلقة السابقة</a>
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
  const link = response.data.data;
  return {
    // returning the data here and setting a key id so it fetches whenever the id changes
    props: {
      key: id,
      link,
    },
  };
}
