import Image from "next/image";
import Navbar from "../../comps/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { anime } from "../animes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../../comps/Footer";
import ReactPlayer from "react-player";
import Head from "next/head";

const animedetails = ({ anime }) => {
  const [season, setSeason] = useState([]);
  const [status, setStatus] = useState([]);
  useEffect(() => {
    if (anime[10] == "fall") {
      setSeason(" خريف");
    }
    if (anime[10] == "summer") {
      setSeason(" صيف");
    }
    if (anime[10] == "spring") {
      setSeason(" ربيع");
    }
    if (anime[10] == "winter") {
      setSeason(" شتاء");
    }
    if (anime[8] == "Finished Airing") {
      setStatus("منتهي");
    }
    if (anime[8] == "Currently Airing") {
      setStatus("مستمر");
    }
    console.log("Data is " + anime);
    console.log(anime[4]);

    // here you do whatever you want with the data animeDetail

    // axios.get(`http://localhost:5050/api/search/anime?query=cowboy bebop`).then((res) => {
    //   SetAnime_banner(res.data.data.data[0].images.jpg.image_url);
    //   SetName(res.data.data.data[0].title);
    //   SetStatus(res.data.data.data[0].status);
    //   SetEpisodes(res.data.data.data[0].episodes);
    //   SetSource(res.data.data.data[0].source);
    //   SetSeason(res.data.data.data[0].season + "" + res.data.data.data[0].year);
    //   SetGenres(res.data.data.data[0].genres);
    //   SetSynopsis(res.data.data.data[0].synopsis);
    // });
  }, []);

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
          slidesToShow: 2,
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
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{anime[0]}</title>
      </Head>
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      ></link>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="anime-details">
        <div className="anime-details-container">
          <div className="animeInfo">
            <div className="pfp">
              <h1 className="phone_title">{anime[0]}</h1>

              <Image
                className="anime-banner"
                alt={anime.title}
                src={anime[1]}
                width="200"
                height="300"
              ></Image>
              <br />

              <a href={`/watch/query=${anime[0]}&episode=1}`}>مشاهدة الان</a>
              <br />
              <a href="">أضف الى قائمة المفضلة</a>
              <br />
              <a href="">اضف الى قائمة المشاهدة لاحقا</a>

              <br />
              <br />
              <br />
            </div>
            <div className="txt">
              <h1>{anime[0]}</h1>
              <p>{anime[5]}</p>
              <br />
              <br />
              <div className="more-info">
                <div className="fst">
                  <div className="genres">
                    <div className="map">
                      {anime[4].map((item, index) => {
                        return <a key={index}>{item.name}</a>;
                      })}
                    </div>
                    <h3>: التصنيفات</h3>
                  </div>
                  <div className="rank">
                    <a>#{anime[6]}</a>
                    <h3>: الترتيب </h3>
                  </div>
                  <div className="source">
                    <a href="">{anime[2]}</a>
                    <h3>: المصدر </h3>
                  </div>
                  <div className="episodes">
                    <a>{anime[3]}</a>
                    <h3>: الحلقات</h3>
                  </div>
                </div>
                <div className="scnd">
                  <div className="type">
                    <a>{anime[7]}</a>
                    <h3>: النوع</h3>
                  </div>
                  <div className="status">
                    <a>{status}</a>
                    <h3>: الحالة</h3>
                  </div>
                  <div className="studio">
                    <a>{anime[9]}</a>
                    <h3>: الأستوديو</h3>
                  </div>
                  <div className="episodes">
                    <a>{season + "  " + anime[11]}</a>
                    <h3>: الموسم</h3>
                  </div>
                </div>
                <br />
                <br />
              </div>

              <div className="eps">
                <Slider {...settings}>
                  {Array(anime[3])
                    .fill(12)
                    .map((el, i) => (
                      <div className="card" key={i}>
                        <div className="card-hover">
                          <a href={`/watch/query=${anime[0]}&episode=${i + 1}`}>
                            <Image
                              src={anime[1]}
                              className="eps-banner"
                              width="200"
                              height="300"
                              alt={i}
                            />
                          </a>
                        </div>
                        <h2>الحلقة : {i + 1}</h2>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <section>
        <Footer />
      </section>
    </>
  );
};

export default animedetails;

export async function getServerSideProps({ params }) {
  const { id } = params;
  console.log(id);
  const response = await axios.get(
    `http://localhost:5050/api/search/anime?query=${id}`
  );
  const data = response.data.data.data[0];
  data.studios.map((item) => {
    console.log(item.name);
  });
  const anime = [
    data.title,
    data.images.jpg.image_url,
    data.source,
    data.episodes,
    data.genres,
    data.synopsis,
    data.rank,
    data.Type,
    data.status,
    data.studios[0].name,
    data.season,
    data.year,
  ];
  return {
    props: {
      key: id,
      anime,
    },
  };
}
