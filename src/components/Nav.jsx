import filmSvg from '../assets/images/film.svg'
import logoPng from '../assets/images/logo.png'
import menuPng from '../assets/images/menu.png'
import closePng from '../assets/images/close.png'


const Nav = () => {
  return (
    <>
      <div className="header_top">
        <img src={filmSvg} alt="" />
        <p className="header_top_text">See no special offer restrictions</p>
      </div>
      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <a href="#!" className="nav_logo">
              <img src={logoPng} alt="" />
              <span>CINEMAS</span>
            </a>
            <label form="check">
              <img className="menu" src={menuPng} alt="" />
            </label>
            <input type="checkbox" id="check" />
            <ul className="nav_list">
              <label form="check">
                <img className="close" src={closePng} alt="" />
              </label>
              <li>
                <a href="#!" className="nav_link">
                  <span>Films</span>
                </a>
              </li>
              <li>
                <a href="#!" className="nav_link">
                  <span>Serials</span>
                </a>
              </li>
              <li>
                <a href="#!" className="nav_link">
                  <span>Cartoons</span>
                </a>
              </li>
              <li>
                <a href="#!" className="nav_link">
                  <span>Collections</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
