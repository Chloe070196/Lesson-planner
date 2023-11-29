import StageCardFrom from "./StageCardForm";
import { getLessonFrameworks } from "../../services/api-requests";
import { useEffect, useState } from "react";
import { checkIfLoaded } from "../../helpers/forCreateLP";
import UpdatedCards from "./UpdatedCards";

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
      <section className="main-section two-columns centered-content">
        <StageCardFrom />
        <UpdatedCards />
      </section>
    </>
  );
}

export default CreateLp;
