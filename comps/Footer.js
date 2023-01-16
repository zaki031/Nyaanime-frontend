
const Footer = () => {
    return ( 
        <div className="footer">
             <div className="custom-shape-divider-bottom-1673468366">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="follow">
                <ul>

                    <li><a href="https://www.instagram.com/nyaanime.app/"><i className="uil uil-instagram"></i></a></li>
                    <li><a href="https://github.com/zaki031/Nyaanime-frontend"><i className="uil uil-github"></i></a></li>
                </ul>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="/">الصفحة الرئيسية</a></li>
                    <li><a href="/watchlist">قائمة المشاهدة</a></li>
                    <li><a href="/random">أنمي عشوائي</a></li>
                </ul>
                <p>
نحن لا نخزّن أي فيديوهات في قواعد البيانات الخاصة بنا كل الفيديوهات مجمعة من مواقع طرف ثالث
                </p>

            </div>
        </div>
     );
}
 
export default Footer;