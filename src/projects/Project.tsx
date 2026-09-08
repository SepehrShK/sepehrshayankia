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
                        <p><a href="https://sepehr-online-shop.vercel.app" target="_blank" rel="noopener noreferrer">نمایش زنده</a></p>
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
                    <h2>مبدل ارز</h2>
                    <p>این سایت با React طراحی شده است. قابلیت تبدیل انواع ارز را به هم دارد. قیمت ها به‌روز هستن و هر 5 دقیقه قیمت جدید گرفته میشود. این سایت به صورت responsive ساخته شده است.</p>
                    <div className="project-links">
                        <p><a href="https://sepehrshk.github.io/currencyConverter/" target="_blank" rel="noopener noreferrer">نمایش زنده</a></p>
                        <p><a href="https://github.com/SepehrShK/currencyConverter" target="_blank" rel="noopener noreferrer">سورس کد در GitHub</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
