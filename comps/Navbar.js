                /* imports */
import { useEffect, useState } from "react";
import pfp from "../public/pfp.jpg";
import axios from "axios";
import Image from "next/image";


const Navbar = () => {
/* State variables. */
  const [open, setOpen] = useState(false);
  const [randomanime, SetRandomanime] = useState([]);
  const [search, SetSearch] = useState("");

  return (
    /* Fetching data from the random anime api. */
    useEffect(() => {
      axios.get("http://127.0.0.1:5050/api/random/anime").then((res) => {
        SetRandomanime(res.data.data.data.title);
      });
    }, []),
    (
      //--------------

      <div className="navbar">
        <nav>
          <div className="logo">
            <a href="/">Nyaanime</a>
          </div>
          <div className="search-bar">
            <a className="search-btn" href={"/search/" + search}>
              البحث
            </a>
            <input
              type="text"
              value={search}
              onChange={(event) => SetSearch(event.target.value)}
              placeholder="ابحث عن الأنمي الذي توّد مشاهدته"
            />
          </div>
          <div className="links">
            <a href="/">الصفحة الرئيسية</a>
            <a href="" style={{opacity:0.5}}>قائمة المشاهدة</a>
            <a href={"/details/" + randomanime}>انمي عشوائي</a>
            <div
              className="p"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Image className="nav-pfp" src={pfp} alt="pfp"></Image>
            </div>
          </div>
        </nav>
        <div
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          id="SubMenu"
        >
          <div className="drop">
            <a href="">اعدادات الحساب</a>
            <br />
            <hr width="200" />

            <a href="">المساعدة والدعم</a>
            <br />
            <hr />

            <a href="">تسجيل الخروج</a>
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
