import Card from './card/Card';
import './whyuspage.scss';

const WhyUsPage = () => {
  return (
    <div className='page_container'>
      <div className='wrapper'>
        <div className='Text_container'>
          <span className='main_header'>
            Why Us
          </span>
          <span className='sub_header'>
            Providing the best services as a one-stop destination for the design and development of all your solutions.
          </span>
        </div>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
