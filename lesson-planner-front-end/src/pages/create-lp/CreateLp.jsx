import StageCardFrom from "./StageCardForm";
import { lessonFrameworks } from "../../services/api-requests";

function CreateLp() {
  // to be moved into a helpers folder
  const checkIfLoaded = () => {
    if (!lessonFrameworks) {
      return <p>loading...</p>;
    }
    if (lessonFrameworks) {
      return (
        <select>
          {lessonFrameworks.map((framework) => (
            <option key={"create-lp" + framework.id}>{framework.name}</option>
          ))}
        </select>
      );
    }
  };

  return (
    <>
      <aside>
        <div id="selected-framework">
          <h3>Framework:</h3>
          {checkIfLoaded()}
        </div>
      </aside>
      <section>
        <StageCardFrom />
      </section>
    </>
  );
}

export default CreateLp;
