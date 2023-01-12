import Navbar from "../comps/Navbar";
import dmm from '../public/404.png';
import Image from 'next/image'

const Notfound = () => {
    return ( 
        <>
        <Navbar/>
        <br /><br/>
        
        <div className="contain" style={{display:'flex',}}>
                                <Image src={dmm}></Image>

            <div className="notfoundtxt" style={{color:'#fff',marginLeft:'200px' , paddingLeft:'50px', marginTop:'100px', fontSize:'30px',textAlign:'center'}}>
                    <h1> أووووووبس.......   خطأ 404  </h1>
        <p> :( هذه الصفحة غير موجودة</p>
            </div>

        
        </div>
       
        </>
        
     );
}
 
export default Notfound;