import './portfolio.scss'
const images =[
  {
    id:1,
    img:'/assets/lml_logo 1.png'
  },
    {
    id:2,
    img:'/assets/logo 1.png' 
  },
    {
    id:3,
    img:'/assets/isk 1.png' 
  },
    {
    id:4,
    img:'/assets/Logo (1).png'
  }
]

const Portfolio = () => {
  return (
    <div className="porfolio">
       {images.map((image) => (
        <div className='card_container' key={image.id}>
          <img src={image.img} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  )
}

export default Portfolio