import Button from "./Button";
import SeriesCard from "./SeriesCard";

const Series = () => {
  return (
    <section className="series">
      <div className="container">
        <h2 className="title">Series</h2>
        <div className="game">
          <h2 className="game_title">Game of Thrones</h2>
          <p className="game_text">
            The time of prosperity is drawing to a close, and the summer, which
            lasted almost a decade, is dying away. Around the center of power of
            the Seven Kingdoms, the Iron Throne, a conspiracy is ripening, and
            during this difficult time, the king decides to seek support from
            his youth friend Eddard Stark. In a world where everyone - from the
            king to the mercenary - is eager for power, intrigues and is ready
            to stick a knife in the back, there is ...
          </p>
        <Button text='Watch'/>
        </div>
        <div className="series_box">
            <SeriesCard text='Wanda Vision'/>
            <SeriesCard text='The Flash'/>
            <SeriesCard text='The Great'/>
            <SeriesCard text='GOTHAM'/>
            <SeriesCard text='The witcher'/>

        </div>
      </div>
    </section>
  );
};

export default Series;
