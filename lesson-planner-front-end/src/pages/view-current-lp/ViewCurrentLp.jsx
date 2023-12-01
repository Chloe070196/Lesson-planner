import { getCurrentLessonPlan } from "../../services/api-requests"
import { useEffect, useState } from "react"
function ViewCurrentLp() {

  const [lp, setLp] = useState(null)
  console.log(lp)

  useEffect(() => setLp(getCurrentLessonPlan(1, setLp)), [])
  const lessonStages = lp && lp.stages

    return (
      <>
        <section className="centered-content centered-content">
        <div className="carousel-container">
        {lessonStages && lessonStages.map((stage, index) => (          
        <div key={stage.stageName + index} className={`card centered-content carousel-item`} >
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
    )
  }
  
  export default ViewCurrentLp