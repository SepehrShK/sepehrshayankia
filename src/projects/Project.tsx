import "./Project.css";

const Project = () => {
    return (
        <section className="projects-section" id="projects">
            <h1>پروژه های من</h1>
            <div className="project-box">
                <div className="project-photo">
                    <img src="/assets/shopSite.png" alt="site photo" />
                </div>
                <div className="project-body">
                    <h2>فروشگاه</h2>
                    <p>یک وب اپ فروشگاهی طراحی شده با React که کاربران میتوانند لاگین کنند و محصولات را سرچ و به سبد خرید خود اضافه کنند. این سایت به صورت responsive ساخته شده است.</p>
                    <div className="project-links">
                        <p><a href="https://sepehr-online-shop.vercel.app" target="_blank" rel="noopener noreferrer">نمایش زنده (نیاز به فیلترشکن دارد)</a></p>
                        <p><a href="https://github.com/SepehrShK/online-shop" target="_blank" rel="noopener noreferrer">سورس کد در GitHub</a></p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="project-box">
                <div className="project-photo">
                    <img src="/assets/currencyConverter.png" alt="site photo" />
                </div>
                <div className="project-body">
                    <h2>مبدل دلار به ریال</h2>
                    <p>طراحی شده با React. این سایت قابلیت تبدیل دلار به ریال و ریال به دلار را دارد. هر 5 دقیقه  به صورت خودکار قیمت جدید از API گرفته میشود. سایت به صورت responsive ساخته شده است.</p>
                    <div className="project-links">
                        <p><a href="https://sepehrshk.github.io/riraProject" target="_blank" rel="noopener noreferrer">نمایش زنده</a></p>
                        <p><a href="https://github.com/SepehrShK/riraProject" target="_blank" rel="noopener noreferrer">سورس کد در GitHub</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
