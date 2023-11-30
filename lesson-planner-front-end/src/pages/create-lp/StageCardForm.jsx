import { useEffect, useState } from "react";
import {
  getCurrentLessonPlan,
  addNewLessonPlan,
  editLessonPlan,
} from "../../services/api-requests";

const INITIAL_CARD = {
  stageTypesIds: "",
  stageName: "",
  duration: "",
  aim: "",
  procedure: "",
  flexi: false,
  id: "",
};

// DUMMY LESSON PLAN ID - TO BE REMOVED!!!!!!
let id = 1;

function StageCardFrom({cardDeck, setCardDeck}) {
  const [card, setCard] = useState(INITIAL_CARD);


  useEffect(() => setCardDeck(getCurrentLessonPlan(id, setCardDeck)), []);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleSubmit = (id, e) => {
    e.preventDefault();
    const updatedStage = card;

    const updatedLessonPlan = cardDeck.stages && {...cardDeck, "stages":[...cardDeck.stages, updatedStage]}
    if (!cardDeck) {
      addNewLessonPlan(updatedLessonPlan);
    }

    if (cardDeck) {
      editLessonPlan(updatedLessonPlan, id);
    }
    getCurrentLessonPlan(id);
  };

  return (
    <>
      <section className="centered-content">
        <form
          className="card centered-content"
          onSubmit={(e) => handleSubmit(1, e)}
        >
          <div
          className="input-container">
            <h3>Stage: </h3>
            <input
              className="input-field"
              type="text"
              name="stageName"
              value={card.stageName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <label className="input-container">
            Time:
            <input
              className="input-field"
              type="number"
              name="duration"
              value={card.duration}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="input-container">
            Aim:
            <input
              className="input-field"
              type="text"
              name="aim"
              value={card.aim}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="input-container">
            Steps:
            <textarea
              className="input-field"
              name="procedure"
              value={card.procedure}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="input-container">
            Flexi-stage:
            <input
              className="input-field"
              type="checkbox"
              value={false}
              name="flexi"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button type="submit">add stage</button>
        </form>
      </section>
    </>
  );
}

export default StageCardFrom;
