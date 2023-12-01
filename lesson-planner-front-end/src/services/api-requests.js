const root = 'http://localhost:3000/'

//lesson plans - THIS DATA CAN BE EDITED BY THE USER
const getLessonPlans = (setRelevantState) => {
    fetch(root + 'savedPlans')
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => setRelevantState(data))
}

const getCurrentLessonPlan = (id, setRelevantState) => {
    fetch(root + `savedPlans/${id}`)
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => setRelevantState(data))
}

const deleteLessonPlan = (id) => {
    fetch(root + `savedPlans/${id}`, {"method": "DELETE"})
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => console.log(data))
}

const addNewLessonPlan = (newLessonPlan) => {
    const options = {
        "method": "POST",
        "headers": {"Content-Type":"application/json"}, 
        "body": JSON.stringify(newLessonPlan)
    }

    fetch(root + `savedPlans`, options)
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => console.log(data))
}


const editLessonPlan = (updatedLessonPlan, id) => {
    const options = {
        "method": "PUT",
        "headers": {"Content-Type":"application/json"}, 
        "body": JSON.stringify(updatedLessonPlan)
    }

    fetch(root + `savedPlans/${id}`, options)
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => console.log(data))
}




//lesson frameworks 

const getLessonFrameworks = (setRelevantState) => {
    fetch(root + 'frameworks')
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => setRelevantState(data)) 
}


//lesson stages - THIS DATA WILL NOT CHANGE
let lessonStages

const getLessonStages = () => {
    fetch(root + 'stageTypes')
    .then(r => r.json())
    .catch(error => console.log(error))
    .then(data => lessonStages = data)
}

getLessonStages()

export {getLessonPlans, getCurrentLessonPlan, deleteLessonPlan, editLessonPlan, addNewLessonPlan, getLessonFrameworks
    , lessonStages}