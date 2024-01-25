import './ourservices.scss';

const OurServices = () => {
  return (
    <div className='ourservices'>
      <div className='wrapper'>
        <div className='text_container'>
          <span>
            <h1>Our Services</h1>
          </span>
          <span>
            <h2>Lorem ipsum dolor sit amet consectetur. Tristique pellentesque lorem tincidunt tortor.</h2>
          </span>
        </div>
        <div className='bottom_container'>
          <div className='services'>
            <div className='card'>
              <img src='public\assets\icon (1).png' />
              <p>Engineering</p>
            </div>
            <div className='card1'>
              <img src='public\assets\Featured icon.png' />
              <p>Software</p>
            </div>
            <div className='card1'>
              <img src='public\assets\3.png'/>
              <p>Edu-tech</p>
            </div>
          </div>
          <div className='side'>
            <div className="text">
              <h2>Engineering Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus vitae orci nunc a massa arcu.
                Amet tortor ut leo blandit vitae scelerisque eget. Lorem ipsum dolor sit amet consectetur.
                Tellus vitae orci nunc a massa arcu. Amet tortor ut leo blandit vitae scelerisque eget.
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <button>
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
