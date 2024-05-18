
import video from '../assets/video/video.mp4'
import widow from '../assets/images/window.png'
import Button from './Button'

const Widow = () => {
  return (
    <section className="widow">
    <video autoPlay muted loop className="widow_video" src={video}></video>
    <div className="container">
      <img className="widow_title" src={widow} alt=""/>
      <p className="widow_text">
        After the events at the Leipzig-Halle airport, Natasha was overtaken by the mistakes of the past. The Red Room again made itself felt - a program to create Widows - professional killers and spies - just like her. Natasha decides once and for all to deal with people whose efforts she herself became a Widow.
      </p>
      <Button text='Watch now'/>
    </div>
  </section>
  )
}

export default Widow