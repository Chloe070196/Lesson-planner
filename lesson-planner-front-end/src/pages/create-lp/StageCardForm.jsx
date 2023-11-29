function StageCardFrom() {

    return (
      <>
        <section  className="centered-content">
          <form className="card centered-content">
            <h3>Stage: name of current lesson stage</h3>

            <label> Time:
              <input />
            </label>
            <label> Aim:
              <input />
            </label>
            <label> Procedure:
              <textarea/>
            </label>
          </form>
        </section>
      </>
    )
  }
  
  export default StageCardFrom