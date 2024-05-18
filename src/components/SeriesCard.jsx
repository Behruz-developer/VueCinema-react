

// eslint-disable-next-line react/prop-types
const SeriesCard = ({text}) => {
  return (
    <div className="series_card ">
    <a href="#!">
      <img src="./images/play.svg" alt="" />
    </a>
    <h5 className="series_text">{text}</h5>
  </div>
  )
}

export default SeriesCard