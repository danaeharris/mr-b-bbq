import Head from "next/head";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mr. B's BBQ</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <header>
        <nav>
          <a href="#about" className="header-item">
            ABOUT
          </a>
          <a href="#menu" className="header-item">
            MENU
          </a>
        </nav>
        <img src="./logo.svg" className="header-image" />
        <nav>
          <a href="#reviews" className="header-item">
            REVIEWS
          </a>
          <a href="#contact" className="header-item">
            CONTACT
          </a>
        </nav>
      </header>
      <main>
        <div className="container">
          <div>
            <h3 className="small-heading">PHOTOS</h3>
            <div className="divider"></div>
            <Slider {...settings} style={{ width: 950, marginLeft: 25 }}>
              <img src="./smoker.svg" className="past-work" />
              <img src="./fire.svg" className="past-work" />
              <img src="./cookies.svg" className="past-work" />
              <img src="./strawberry-cookies.svg" className="past-work" />
              <img src="./sweet-tea.svg" className="past-work" />{" "}
              <img src="./wedding-people.svg" className="past-work" />
              <img src="./infused-water.svg" className="past-work" />
              <img src="./skewers.svg" className="past-work" />
              <img src="./grilled-chicken.svg" className="past-work" />
              <img src="./roasted-potatoes.svg" className="past-work" />
              <img src="./brookies.svg" className="past-work" />
            </Slider>
            <h3 className="small-heading" id="about">
              ABOUT
            </h3>
            <div className="divider"></div>
            <div style={{ display: "flex" }}>
              <img
                src="./aboutPic.png"
                style={{
                  height: 300,
                  width: "auto",
                  paddingLeft: 0,
                  paddingRight: 50,
                }}
              />
              <p className="copy">
                Hi there! Our names are Chuck and Jan Binns. We’ve been catering
                for the last 10 years. We specialise in BBQ and traditional
                southern cooking. We’ve catered large cookouts, special events,
                rehearsal dinners, and even weddings! We would love to make your
                event extra special!
              </p>
            </div>
          </div>

          <h3 className="small-heading" id="menu">
            MENU
          </h3>
          <div className="divider"></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="column-one">
              <h4>Meat</h4>
              <div>
                <p className="menu">Beef Brisket</p>
              </div>
              <div>
                <p className="menu">Smoked Cornish Game Hens</p>
              </div>
              <div>
                <p className="menu">Grilled Chicken Breast</p>
              </div>
              <div>
                <p className="menu">Smoked Turkeys</p>
              </div>
              <div>
                <p className="menu">Steaks</p>
              </div>
              <div>
                <p className="menu">Pulled Pork</p>
              </div>
              <div>
                <p className="menu">Hamburgers and Hotdogs</p>
              </div>
            </div>
            <div className="column-2">
              <h4>Sides</h4>
              <div>
                <p className="menu">Salad</p>
              </div>
              <div>
                <p className="menu">Mac and Cheese</p>
              </div>
              <div>
                <p className="menu">Sweet Potato Souffle</p>
              </div>
              <div>
                <p className="menu">Green Beans</p>
              </div>
              <div>
                <p className="menu">Roasted Veggies</p>
              </div>
              <div>
                <p className="menu">Mashed Potatoes</p>
              </div>
              <div>
                <p className="menu">Roasted Potatoes</p>
              </div>
              <div>
                <p className="menu">Baked Potatoes</p>
              </div>
              <div>
                <p className="menu">Potato Salad</p>
              </div>
              <div>
                <p className="menu">Baked Beans</p>
              </div>
              <div>
                <p className="menu">Corn on the Cob</p>
              </div>
              <div>
                <p className="menu">Rolls</p>
              </div>
            </div>
            <div className="column-3">
              <h4>Desserts</h4>
              <div>
                <p className="menu">Peach Cobbler</p>
              </div>
              <div>
                <p className="menu">Pound Cake</p>
              </div>
              <div>
                <p className="menu">Upside Down German Chocolate Cake</p>
              </div>
              <div>
                <p className="menu">Brownies and Cookies</p>
              </div>
              <h4>Drinks</h4>
              <div>
                <p className="menu">Sweet and Unsweet Tea</p>
              </div>
              <div>
                <p className="menu">Pink Lemonade</p>
              </div>
              <div>
                <p className="menu">Lemonade</p>
              </div>
              <div>
                <p className="menu">Sodas</p>
              </div>
            </div>
          </div>
          <p className="copy">
            *This is just a sample menu of our most common menu options. If you
            don’t see what you’re looking for on our menu or if you have allergy
            concerns, shoot us an email, and we’ll be happy to let you know if
            we’re the best choice for you!
          </p>
          <h3 className="small-heading" id="reviews">
            REVIEWS
          </h3>
          <div className="divider"></div>
          <p className="copy">
            “Mr. B’s does more than barbeque. The Binns made my wedding
            reception extra special.”
          </p>
          <p className="copy">“Best Barbeque I’ve ever had!” </p>
          <p className="copy">“Mrs B’s mac and cheese is to die for!” </p>
          <h3 className="small-heading" id="contact">
            CONTACT
          </h3>
          <div className="divider"></div>
          <div>
            <span className="copy">
              Contact us for pricing and to check our availability at
            </span>
            <a className="copy"> mrbsbarbeque@gmail.com</a>
            <span className="copy">.</span>
          </div>
          <div style={{ marginTop: 5 }}>
            <span className="copy">And don't forget to follow us on </span>
            <a href="https://www.facebook.com/mrbbbq/about" className="copy">
              Facebook!
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400&display=swap");
        header {
          padding: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f2521d;
          color: #fffde2;
        }
        .header-item {
          font-family: "Bebas Neue", cursive;
          font-size: 36px;
          color: #fffde2;
          padding: 30px;
        }
        .header-image {
          height: 200px;
          width: auto;
        }
        main {
          height: 100%;
          margin: 0 auto;
          background-color: #022b40;
          color: #fffde2;
          padding-bottom: 200px;
        }
        .container {
          margin: 0 auto;
          width: 1000px;
          height: 100%;
        }
        .small-heading {
          margin: 0;
          padding: 50px 0 0 0;
        }
        .divider {
          height: 2px;
          width: 1000px;
          background-color: #f2521d;
          margin: 15px 0 50px 0;
        }

        .past-work {
          height: 350px;
          width: "auto";
          margin: 10px;
        }
        .menu {
          line-height: 1.25;
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
        }
        h3 {
          font-family: "Bebas Neue", cursive;
          font-size: 30px;
        }
        h4 {
          font-family: "Bebas Neue", cursive;
          font-size: 24px;
        }
        .copy {
          margin: 0;
          line-height: 1.25;
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          color: #fffde2;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  );
}
