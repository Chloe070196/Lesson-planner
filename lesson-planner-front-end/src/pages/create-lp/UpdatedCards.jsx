import { useEffect, useState } from "react";

function UpdatedCards({cardDeck}) {

  const [lessonStages, setLessonStages] = useState(null)

  useEffect(() => setLessonStages(cardDeck && cardDeck.stages), [cardDeck])

  return (
    <>
      <section className="centered-content  main-column">
        <div className="stacked-content">
        {lessonStages && lessonStages.map((stage, index) => (          
        <div key={stage.stageName + index} className={`card centered-content stacked-item${index}`} >
        <div className="top-right">
            <h4> Time:</h4>
            <p>{stage.duration}</p>
          </div>
          <h3>{stage.stageName.toUpperCase()}</h3>
          <h4> Aim:</h4>
          <p>{stage.aim} </p>
          <h4> Procedure:</h4>
          {stage.procedure}
        </div>))}
        </div>
      </section>
    </>
  );
}

export default UpdatedCards;
