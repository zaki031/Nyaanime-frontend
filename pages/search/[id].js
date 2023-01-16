import Navbar from "../../comps/Navbar";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Footer from "../../comps/Footer";
import Head from 'next/head'


const search = ({ anime }) => {
  const router = useRouter();
  const { id } = router.query;
    console.log(anime)
    anime.map((item)=>{
        console.log(item.title)
    })

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
    return ( 
      
        <>
        <Head>
          <title>{id +" : البحث عن "}</title>
        </Head>
         <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      ></link>
            <Navbar/>
            <br /><br /><br />

            <div className="search-container">
              <h1><span>{'"'+id +'"'}</span> : النتائج الموجودة لـ</h1>
               {
                  <div className="animes">
          

                  <Slider {...settings}>
          {anime.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-hover">
                    <a href={"/details/" + item.title} key={item.title}>
                      <Image
                        src={item.images.jpg.image_url}
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

                  </div>
               
          }
              
              
 
            </div>
    
           
        
        <section>
                  <Footer />

        </section>
        </>
     );
}
 
export default search;


export async function getServerSideProps({ params }) {
    const { id } = params;
    console.log(id);
    const response = await axios.get(
      `http://localhost:5050/api/search/anime?query=${id}`
    );
    const data = response.data.data.data;
    const anime = data
    console.log(response.data.data)
    console.log("data is" + response);
    return {
      props: {
        key: id,
        anime,
      },
    };
  }
  