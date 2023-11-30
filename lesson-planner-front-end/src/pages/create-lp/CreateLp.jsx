import StageCardFrom from "./StageCardForm";
import { getLessonFrameworks } from "../../services/api-requests";
import { useEffect, useState } from "react";
import { checkIfLoaded } from "../../helpers/forCreateLP";
import UpdatedCards from "./UpdatedCards";

function CreateLp() {
  const [lessonFrameworks, setLessonFrameworks] = useState(null);
  const [cardDeck, setCardDeck] = useState([]);

  useEffect(() => {
    getLessonFrameworks(setLessonFrameworks);
  }, []);

  return (
    <>
      <section>
        <div id="selected-framework">
          <h3>Framework:</h3>
          {checkIfLoaded(lessonFrameworks)}
        </div>
      </section>
      <section className="main-section two-columns centered-content">
        <StageCardFrom cardDeck={cardDeck} setCardDeck={setCardDeck}/>
        <UpdatedCards cardDeck={cardDeck}/>
      </section>
    </>
  );
}

export default CreateLp;
