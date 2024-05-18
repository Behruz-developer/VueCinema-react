import CollectionsCard from "./CollectionsCard"

const Collections = () => {
  return (
    <section className="collection">
    <div className="container">
    <h2 className="title">Collections</h2>
      <div className="collection_box">
        <CollectionsCard text='All Marvel Films'/>
        <CollectionsCard text='Fast and the Furious'/>
        <CollectionsCard text='Star Wars'/>
      </div>
    </div>
  </section>
  )
}

export default Collections