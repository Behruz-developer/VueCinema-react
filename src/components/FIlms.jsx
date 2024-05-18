import FilmsCard from "./FilmsCard";

const FIlms = () => {
  return (
    <>
      <section className="film">
        <div className="container">
          <h2 className="title">films</h2>
          <div className="film_box">
            <FilmsCard
              time="2:14:33"
              title="Black Panther"
              text="At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so.
              Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of
              absorbing..."
            />
            <FilmsCard
              time="2:32:13"
              title="The Dark Knight"
              text="Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they..."
            />
            <FilmsCard
              time="1:53:45"
              title="The Gentlemen"
              text="One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ..."
            />
            <FilmsCard
              time="2:58:20"
              title="The Lord of the..."
              text="Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil..."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FIlms;
