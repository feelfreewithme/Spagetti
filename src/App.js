import "./App.css";
import Aos from "aos";

const App = () => {
  Aos.init();
  return (
    <div className="App">
      <div className="loader-wrapper">
        <video playsInline autoPlay muted loop>
          <source
            src="./img/animation4.mp4"
            type="video/mp4"
            className="loader"
          />
        </video>
      </div>

      <article>
        {/*Main Navigation*/}
        <header>
          {/*Navbar*/}
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
              {/* Navbar brand */}
              <a className="navbar-brand" href="./index.html">
                <img
                  src="./img/logo.png"
                  width="75px"
                  height="100%"
                  alt="Logo"
                />
              </a>
              {/* Collapse button */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Collapsible content */}
              <div className="collapse navbar-collapse" id="basicExampleNav">
                {/* Links */}
                <ul className="navbar-nav ml-auto smooth-scroll d-flex align-items-start align-items-md-center">
                  <li className="nav-item">
                    <a className="nav-link" href="#introduction">
                      Introduction
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#howitworks">
                      How It Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="btn btn-warning rounded-pill"
                      href="/"
                      target="_blank"
                      id="button"
                    >
                      DApp
                    </a>
                  </li>
                </ul>
                {/* Links */}
              </div>
              {/* Collapsible content */}
            </div>
            <div className="header-overlap"></div>
          </nav>
          {/* Navbar */}

          {/* <div className="overlay"></div> */}
          <div className="animation-container">
            <video playsInline autoPlay muted loop>
              <source src="./img/animation1.mp4" type="video/mp4" />
            </video>
          </div>

          {/*Mask*/}
          <div id="intro" className="view lazyload">
            <div className="mask">
              <div className="container d-flex justify-content-center align-items-center h-100">
                {/* <img src="./img/Ghost1.png" width="35%" className="d-none d-md-block"
                            style="position: absolute;top: 80px;left: 0%;transform: rotate(-20deg);" alt=""> */}
                <div className="container-introduction d-flex text-center justify-content-center align-items-center flex-column">
                  <h1 className="text-warning">
                    Happy <br /> Halloween
                  </h1>
                  <p className="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque leo sem, <br />
                    malesuada non dui sed, volutpat suscipit neque.
                  </p>
                  <div className="container-button">
                    <a className="btn btn-danger rounded-pill" href="/">
                      DApp
                    </a>
                    <a className="btn btn-outline-light rounded-pill" href="/">
                      Docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.Mask*/}
        </header>
        {/*Main Navigation*/}
        <main>
          <section
            className="community-token py-5"
            id="introduction"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4 d-flex justify-content-center align-items-start flex-column">
                  <p className="subtitle">About</p>
                  <h1>Introduction to Swap</h1>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque leo sem, malesuada non dui sed, volutpat
                    suscipit neque. Donec felis lorem, dignissim a erat eget,
                    ultricies dictum elit. Nunc et fermentum mi. Donec fermentum
                    et mauris eu mattis. Aenean cursus urna sem, et pretium
                    neque rutrum non. Maecenas nec efficitur ligula.
                  </p>
                  <a className="btn rounded-pill" href="/">
                    Get Started
                  </a>
                </div>
                <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
                  <video playsInline autoPlay muted loop>
                    <source src="./img/animation2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>

          <section
            className="community-units py-5"
            id="howitworks"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <video playsInline autoPlay muted loop>
                    <source src="./img/animation3.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                  <p className="subtitle">Working</p>
                  <h1>How It Works?</h1>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque leo sem, malesuada non dui sed, volutpat
                    suscipit neque.
                  </p>
                  <ul className="list-unstyled mt-2">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-4" id="download">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-12 mb-4">
                  <p className="subtitle">Explore</p>
                  <h1>Downloads</h1>
                  <ul className="list-unstyled mt-4 d-flex flex-column flex-md-row">
                    <li className="d-flex align-items-center flex-column flex-md-row">
                      <a href="/#">
                        <i className="fab fa-discord fa-lg mr-2"></i>
                        Discord
                      </a>
                    </li>
                    <li className="d-flex align-items-center flex-column flex-md-row">
                      <a href="/#">
                        <i className="fab fa-github fa-lg mr-2"></i>
                        Github
                      </a>
                    </li>
                    <li className="d-flex align-items-center flex-column flex-md-row">
                      <a href="/#">
                        <i className="fas fa-file fa-lg mr-2"></i> Audit Paper
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-4 py-md-5 page-footer font-small">
          <div className=" container">
            <div className="row">
              <div className="col-12 col-md-4 d-flex align-items-center flex-column">
                {/* <img
                src="./img/logo.png"
                width="25%"
                className="mb-2 logo"
                alt="Footer"
              /> */}
                <small className="d-block mb-3 text-muted">
                  © 2022 – Spagetti
                </small>
              </div>
              <div className="col-6 col-md-3">
                <h5 className="font-weight-bold">Links</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#introduction">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="#howitworks">
                      How it works?
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className="font-weight-bold">Downloads</h5>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-muted" href="/#">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/#">
                      Github
                    </a>
                  </li>
                  <li>
                    <a className="text-muted" href="/#">
                      Audit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default App;
