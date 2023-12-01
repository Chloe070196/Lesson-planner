import { useState, useEffect } from "react";
import { getLessonPlans } from "../../services/api-requests";

function Dashboard() {
  const [lessonPlans, setLessonPlans] = useState(null);

  useEffect(() => getLessonPlans(setLessonPlans), []);

  return (
    <>
      <main className="grid-3-by-3">
        {lessonPlans &&
          lessonPlans.map((lp, index) => (
            <div className="card" key={"lp" + index}>
              <h3>{lp.title ? lp.title : "lesson title"}</h3>
              <h4>aim:</h4>
              <p>{lp.mainAim}</p>
              <h4>secondary aims:</h4>
              <p>{lp.subsidiaryAims}</p>
              <h4>level:</h4>
              <p>{lp.level}</p>
              <h4>age group:</h4>
              <p>{lp.ageGroup}</p>
            </div>
          ))}
      </main>
    </>
  );
}

export default Dashboard;


// "id": 1,
//       "planFrameworkId": 1,
//       "title": "Animal and adjectives of descriptions",
//       "authorId": 1,
//       "mainAim": "students can talk about their favourite animals and compare them",
//       "subsidiaryAims": "students can hold a basic, short conversation in small groups, taking turns where appropriate",
//       "level": "A1+",
//       "ageGroup": "6-7 y/o",