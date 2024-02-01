import './navbar.scss';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className='container'>
          <div className="logo">
            <img src="/public/assets/logo.png" />
          </div>

          <div className="navigation">
            <div className='content_container'>
              <div className='content'>
                <span>
                  <h2>
                    Engineering 
                  </h2>
                  <IoIosArrowDown className='arrow' />
                </span>
              </div>
              <div className='content'>
                <span>
                  <h2>
                    Software 
                  </h2> 
                  <IoIosArrowDown className='arrow' />
                </span>
              </div>
              <div className='content'>
                <span>
                  <h2>
                    Edu-tech 
                  </h2>
                  <IoIosArrowDown className='arrow' />
                </span>
              </div>
              <div className='content'>
                <span>
                  <h2>
                    About Us 
                  </h2>
                </span>
              </div>
            </div>

            
              <button>
               Contact Us
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
