import React from 'react'
import { NavLink } from 'react-router-dom';
import CountUp from "react-countup";
function AboutUs() {
  return (
    <section>
      <div className="basket-image">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          alt=""
        />
        <div className="links">
          <NavLink end to="/">
            Ana səhifə
          </NavLink>{" "}
          / Haqqımızda
          <div className="text">
            <h1>Haqqımızda</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="textDiv">
          <p>Lorem</p>
        </div>
      </div>
      <div className="our_artists">
        <div className="container">
          <h1>Komandamız</h1>
          <div className="artists">
            <div className="artist">
              <div
                className="artistimg"
                data-aos="fade-right"
                // data-aos-duration="2000"
              >
                <img src="https://cdn.bolvo.com/assets/viasun/team-item-1.jpg" />
              </div>
              <div className="artisttext">
                <h1>Tur bələdçisi</h1>
              </div>
            </div>
            <div className="artist">
              <div
                className="artistimg"
                data-aos="fade-up"
                // data-aos-duration="2000"
              >
                <img src="https://cdn.bolvo.com/assets/viasun/team-item-2.jpg" />
              </div>
              <div className="artisttext">
                <h1>Yoga coach</h1>
              </div>
            </div>
            <div className="artist">
              <div
                className="artistimg"
                data-aos="fade-left"
                // data-aos-duration="2000"
              >
                <img src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg" />
              </div>
              <div className="artisttext">
                <h1>Hiking Coach</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-flowers">
        <div className="about-flowers-details">
          <p className="bolder text-teal-300">
            Çatdırılma xidmətimiz indi daha sərfəlidir
          </p>
          <p className="pstyle text-teal-300">
            Sizlər üçün ən sərfəlisini etdik
          </p>
        </div>
      </div>
      <div className="friends">
        <div className="container">
          <div className="collobs">
            <div
              className="collob"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src="/images/decathlon.png" />
            </div>
            <div
              className="collob"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png" />
            </div>
            <div
              className="collob"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png" />
            </div>
            <div
              className="collob"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="area">
        <div className="container">
          <div className="clients">
            <div className="client">
              <div className="client-image"></div>
              <div className="client-text">
                <CountUp end={500} start={0} duration={6.75} separator=" " />
                <p>Bloq</p>
              </div>
            </div>
            <div className="client">
              <div className="client-image"></div>
              <div className="client-text">
                <CountUp
                  end={15}
                  start={0}
                  duration={6.75}
                  separator=" "
                  decimals={3}
                  decimal=","
                />
                <p>Yazar</p>
              </div>
            </div>
            <div className="client">
              <div className="client-image"></div>
              <div className="client-text">
                <CountUp end={250} start={0} duration={6.75} separator=" " />
                <p>Mükafat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="terri">
        <div className="container">
          <div className="teams">
            <div className="team">
              <div className="team-image"></div>
              <div className="team-text">
                <h1>Texniki Dəstək</h1>
                <p>Müştərilərimizə tam texniki dəstək göstərilir</p>
              </div>
            </div>
            <div className="team">
              <div className="team-image"></div>
              <div className="team-text">
                <h1>Sertifikat</h1>
                <p>Tam sertifikatlaşdırılmış müəssisəmiz xidmətinizdədir</p>
              </div>
            </div>
            <div className="team">
              <div className="team-image"></div>
              <div className="team-text">
                <h1>Təbii məhsullar</h1>
                <p>Məhsullar heç bir canlıya zərər vermədən hazırlanır </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs