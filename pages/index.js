/* Imports */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../comps/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });







export default function Home() {

  const [animes, SetAnimes] = useState([]);
  const [topanimes, SetTopanimes] = useState([]);
  const [latest, SetLatest] = useState([]);

 
/* API requests */

  useEffect(() => {
    axios.get("http://127.0.0.1:5050/api/top/anime").then((res) => {
      if (res.data.data.data !== null) {
        SetTopanimes(res.data.data.data);
      }
    });

    axios.get("http://127.0.0.1:5050/api/upcoming/anime").then((res) => {
      if (res.data.data.data !== null) {
        SetAnimes(res.data.data.data);
      }
    });
    axios.get("http://127.0.0.1:5050/api/latest/anime").then((res) => {
      if (res.data.data !== null) {
        SetLatest(res.data.data);
        console.log(res.data.data[0]);
      }
    });
  }, []);

/* slider settings */

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  
  
  const [search, SetSearch] = useState("");

  return (
    <>
    <Head>
      <title>Nyaanime</title>
    </Head>
     
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      ></link>
      <Navbar />

      <br />
  

      <div className="input-container">
       
        <input
          type="text"
          className="phone-input"
          placeholder="ابحث عن الانمي اللذي تود مشاهدته"
        />
            <a className="phone-btn" href={"/search/" + search}>
              البحث
            </a>
   
      </div>
      

      <section className="Latest">
        <h1>اخر الحلقات المضافة</h1>

        <Slider {...settings}>
          {
            latest?.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-hover">
                    <a href={`http://localhost:3000/watch/query=${item.anime}&episode=${item.episode}`} key={item.title}>
                      <Image
                        src={item.poster}
                        onError={handleErrorImage}
                        className="foto"
                        alt={item.title}
                        width="200"
                        height="350"
                      />
                    </a>
                  </div>
                  <h4>{item.episode + " : الحلقة "}</h4>

                  <h2>{item.anime}</h2>
                </div>
              ))
            }
        </Slider>
      </section>

      <br />
      <section className="Top">
        <h1>أفضل الأنميات</h1>

        <Slider {...settings}>
          {
             topanimes?.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-hover">
                    <a href={"/details/" + item.title} key={item.title}>
                      <Image
                        src={
                          defaultImage[item.title] === item.title
                            ? defaultImage.linkDefault
                            : item.images.jpg.image_url
                        }
                        onError={handleErrorImage}
                        className="foto"
                        alt={item.title}
                        width="200"
                        height="350"
                      />
                    </a>
                  </div>

                  <h2>{item.title}</h2>
                </div>
              ))
            }
        </Slider>
      </section>

      <section className="Upcomming">
        <h1>أنميات قادمة</h1>

        <Slider {...settings}>
          {animes.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-hover">
                    <a href={"/details/" + item.title} key={item.title}>
                      <Image
                        src={
                          defaultImage[item.title] === item.title
                            ? defaultImage.linkDefault
                            : item.images.jpg.image_url
                        }
                        onError={handleErrorImage}
                        className="foto"
                        alt={item.title}
                        width="200"
                        height="350"
                      />
                    </a>
                  </div>

                  <h2>{item.title}</h2>
                </div>
              ))
            
            }
        </Slider>
       
      </section>
    
        <Footer />
        

      
    </>
  );
}
