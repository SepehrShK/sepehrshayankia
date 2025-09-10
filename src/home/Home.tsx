import './Home.css'

const Home = () => {
    return (
        <section id='home' className="home-section">
            {/* info */}
            <div className='home-info'>
                <h2>برنامه نویس فرانت‌اند</h2>
                <p>سلام، من سپهر شایان‌ کیا هستم، برنامه‌ نویس فرانت‌اند. عاشق طراحی رابط‌های کاربری زیبا و ساده‌ام و تلاش می‌کنم تجربه کاربری رو بهتر و سریع‌تر کنم.</p>
                <p>علاقه‌مندم به‌عنوان front-end developer در تیم‌های خلاق فعالیت کنم و در کنار یادگیری، تجربیاتم رو هم به‌اشتراک بذارم.</p>
            </div>

            {/* photo */}
            <div className='home-photo'>
                <img className="myPhoto" src="/assets/MyPhoto.png" alt="My Photo" />
            </div>
        </section>
    )
}

export default Home
