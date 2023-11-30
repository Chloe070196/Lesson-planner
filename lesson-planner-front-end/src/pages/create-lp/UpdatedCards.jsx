function UpdatedCards({cardDeck}) {

  const lessonStages = cardDeck.stages
  return (
    <>
      <section className="centered-content stacked">
        {lessonStages.map(stage => (          
        <div key={stage.id} className="card centered-content">
        <div className="top-right">
            <h4> Time:</h4>
            <p>{stage.duration}</p>
          </div>
          <h4> Aim:</h4>
          <p>{stage.aim} </p>
          <h4> Procedure:</h4>
          {stage.procedure}
        </div>))}
      </section>
    </>
  );
}

export default UpdatedCards;
