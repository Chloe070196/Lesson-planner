const checkIfLoaded = (lessonFrameworks) => {
    
    if (lessonFrameworks) {
      return (
        <select>
          {lessonFrameworks.map((framework) => (
            <option key={"create-lp" + framework.id}>{framework.name}</option>
          ))}
        </select>
      );
    }
    return <p>loading...</p>;
  };

  export {checkIfLoaded}