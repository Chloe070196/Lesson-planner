import StageCardFrom from "./StageCardForm";
import { lessonFrameworks } from "../../services/api-requests";

function CreateLp() {
  return (
    // {if(!lessonFrameworks){return(<p>loading...</p>)}}
    <>
      <aside>
        <div id="selected-framework">
          <h3>Framework:</h3>
          <select>
            {/* <option>none</option> */}
            {lessonFrameworks.map((framework) => (
              <option key={"create-lp" + framework.id}>{framework.name}</option>
            ))}
          </select>
        </div>
      </aside>
      <section>
        <StageCardFrom />
      </section>
    </>
            
  );
}

export default CreateLp;
