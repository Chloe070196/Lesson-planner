import StageCardFrom from "./StageCardForm";
import { getLessonFrameworks } from "../../services/api-requests";
import { useEffect, useState } from "react";
import { checkIfLoaded } from "../../helpers/forCreateLP";

function CreateLp() {
  const [lessonFrameworks, setLessonFrameworks] = useState(null);

  useEffect(() => {
    getLessonFrameworks(setLessonFrameworks);
  }, []);

  return (
    <>
      <aside>
        <div id="selected-framework">
          <h3>Framework:</h3>
          {checkIfLoaded(lessonFrameworks)}
        </div>
      </aside>
      <section className="main-section">
        <StageCardFrom />
      </section>
    </>
  );
}

export default CreateLp;
