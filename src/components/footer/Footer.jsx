import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='container'>
          <div className='text'>
            <img src='/public/assets/Frame 1000000831.png'/>
            <h1>Let’s Establish a Connection Now</h1>
          </div>
          <div className='buttons'>
            <button>
              Call Now
              <img src='/public/assets/Icon (2).png' />
            </button>
            <button className='button1'>
              Mail to 
              <img src='/public/assets/Icon (3).png' />
            </button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='logo'>
          <img src='/public/assets/logo.png' />
        </div>
        <div className='mid'>
          <div className='r1'>
            <p>Engineering</p>
            <p>Software</p>
            <p>Edu-Tech</p>
          
          </div>
          <div className='r2'>
            <span>
              <p>About Us</p>
              <p>Careers</p>
            </span>
            <div className="r3"></div>
          </div>
        </div>
        <div className='last'>
          <div className='left'>
            <img src='/public/assets/1.png' />
            <img src='/public/assets/2.png' />
          </div>
          <div className='mid'>
            <p>© 2023 All rights reserved.</p>
          </div>
          <div className='right'>
            <p>Privacy Policy</p>
            <div className='line'></div>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
