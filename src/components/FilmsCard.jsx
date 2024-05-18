import playSvg from '../assets/images/play.svg'
// eslint-disable-next-line react/prop-types
const FilmsCard = ({text, time, title}) => {
  return (
    <>
          <div className="film_card">
            <a href="#!" className="film_play" >
              <img src={playSvg} alt="" />
            </a>
            <p className="film_time">{time}</p>
            <p className="film_title">{title}</p>
            <p className="film_text">{text}</p>
          </div>
          
    </>
  )
}

export default FilmsCard