import Navbar from "../comps/Navbar"
import lobanner from '../public/login-banner.png'
import Image from 'next/image'
 

 

const login = () => {
    return ( <>
        <Navbar/>
        <br /><br />
        <div className="login-container">
        <Image className="login-banner" src={lobanner}></Image>

            <div className="form">
            <form action="">
                <h1>تسجيل الدخول</h1>
                <hr />
                <br /><br />
                <div className="email">
                <label htmlFor="email">: البريد الالكتروني </label>

                <input type="text" name="email" placeholder="أدخل بريدك الاكتروني" id="" />
                </div>
                <br /><br />

                <div className="pass">
                <label htmlFor="email">: كلمة السر </label>

                <input type="password" name="email" placeholder="أدخل كلمة سرّك" id="" />


                </div>
                <br /><br />
                <div className="remember">
                <input type="checkbox" name='check' id="check" />
                <label htmlFor="check"> &nbsp;  تذكّرني </label>

                </div>
                <br />
                <button className="login-btn">تسجيل الدخول</button>
                <p>لا تملك حسابا بعد؟<a href="/signin">افتح واحدا</a></p>
          
            </form>
            </div>
          
        </div>
        </> );
}
 
export default login;