/* eslint-disable react/prop-types */
import playSvg from '../assets/images/play.svg'

const CollectionsCard = ({text}) => {
  return (
    <div className="collection_card">
    <div className="card_box">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
    <div className="collection_title">
    <img className="collection_play" src={playSvg} alt=""/>
      <h5 className="collection_text">{text}</h5>
    </div>
    <div className="card_box">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  </div>
  )
}

export default CollectionsCard