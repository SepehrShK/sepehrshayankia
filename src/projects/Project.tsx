import "./Project.css";

const Project = () => {
    return (
        <section className="projects-section">
            <h1>پروژه های من</h1>
            <div className="project-box">
                <div className="project-photo">
                    <img src="/assets/shopSite.png" alt="site photo" />
                </div>
                <div className="project-body">
                    <h2>فروشگاه</h2>
                    <p>یک وب اپ فروشگاهی طراحی شده با react که کاربران میتونن لاگین کنند و محصولات رو سرچ کنند و به سبد خرید خود اضافه کنند.</p>
                    <div className="project-links">
                        <p><a href="https://sepehr-online-shop.vercel.app" target="_blank" rel="noopener noreferrer">نمایش زنده (نیاز به روشن شدن فیلترشکن هستش)</a></p>
                        <p><a href="https://github.com/SepehrShK/online-shop" target="_blank" rel="noopener noreferrer">سورس کد در GitHub</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
