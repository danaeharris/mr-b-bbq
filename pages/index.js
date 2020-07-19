import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mr. B's BBQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <a href="" className="header-item">
            ABOUT
          </a>
          <a href="" className="header-item">
            MENU
          </a>
        </nav>
        <img src="./logo.png" className="header-image" />
        <nav>
          <a href="" className="header-item">
            REVIEWS
          </a>
          <a href="" className="header-item">
            CONTACT
          </a>
        </nav>
      </header>
      <main>
        <div className="container">
          <div>
            <h4 className="small-heading">ABOUT</h4>
            <div className="divider"></div>
            <div style={{ display: "flex" }}>
              <img
                src="./aboutPic.png"
                style={{
                  height: 300,
                  width: "auto",
                  paddingTop: 30,
                  paddingBottom: 30,
                  paddingLeft: 0,
                  paddingRight: 30,
                }}
              ></img>
              <p style={{ padding: 30, margin: 0 }}>
                Hi, there! Our names are Chuck and Jan Binns. We've been
                catering for the last 10 years. We specialize in BBQ and
                traditional southern cooking. We've catered large cook-outs,
                rehearsal dinners, and even weddings. We would love to make your
                event extra special.
              </p>
            </div>
          </div>
          <div>
            <h4 className="small-heading">MENU</h4>
            <div className="divider"></div>
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
        h4 {
          font-family: "Bebas Neue", cursive;
          font-size: 30px;
        }
        p {
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
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
        }
        .container {
          margin: 0 auto;
          width: 1000px;
          height: 100%;
        }
        .small-heading {
          margin: 0;
          padding: 50px 0 10px 0;
        }
        .divider {
          height: 2px;
          width: 1000px;
          background-color: #f2521d;
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
