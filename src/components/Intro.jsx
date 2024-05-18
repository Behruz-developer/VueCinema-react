import Button from "./Button";

const Intro = () => {
  return (
    <>
      <div className="intro" >
        <div className="container">
          <h1 className="intro_title">Kong: Skull Island</h1>
          <p className="intro_text">
            The film takes the viewer to the 70s of the last century. The
            protagonist organizes an expedition to the Skull island, always
            covered in fog, on which King Kong was once caught to find the
            missing brother and some mysterious substance. During...
          </p>
          <div className="intro_info">
            <Button text='Watch now'/>
            <Button text='Download'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
