import Navbar from "../comps/Navbar"
import lobanner from '../public/login-banner.png'
import Image from 'next/image'

const signin = () => {
    return ( 
        <>
        <Navbar/>
        <br /><br />
        <div className="login-container">
        <Image className="login-banner" src={lobanner}></Image>

            <div className="form">
            <form action="">

                
                <h1>انشاء حساب جديد</h1>
                <hr />
                <br /><br />

                <div className="email">
                <label htmlFor="email">البريد الاكتروني :</label>

                <input type="text" name="email" placeholder="أدخل بريدك الالكتروني" id="" />
                </div>
                <br /><br />

                <div className="pass">
                <label htmlFor="email">كلمة السّر :</label>

                <input type="text" name="email" placeholder="أدخل كلمةالسر" id="" />


                </div>
                <br /><br />
                <button className="login-btn">انشئ حسابك</button>
                <br /><br />
                <p>تملك حسابا من قبل؟ <a href="/login">سجّل دخولك</a></p>
            </form>
            </div>

          
        </div>
        </>
     );
}
 
export default signin;