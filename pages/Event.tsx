import Styles from 'styles/Login.module.css';

export default function Event() {


  return (
    <div className={Styles.container}>
      <div className={Styles.login}>
        <div className={Styles.head}>
          <p>
            <span className={Styles.mainHeading}>Event Planner Application</span>
          </p>
        </div>
        <p className={Styles.signIn}>Create Event</p>
        <div className={Styles.formDiv}>
          <form className={Styles.mainForm} >
            <div className={Styles.formInDiv}>
              <label htmlFor="exampleInputEmail1" className={Styles.emailLabel}>
                Enter Title:
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                className={Styles.emailInput}
                id="exampleInputEmail1"
                name="title"
                // value={title}
             
                required
                autoComplete="true"
              />
            </div>
            <div className="sndDiv">
              <label htmlFor="exampleInputDate1" className={Styles.passLabel}>
                Date:
              </label>
              <input
                type="date"
                className={Styles.passInput}
                id="exampleInputDate1"
                name="date"
                // value={date}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputTime1" className={Styles.passLabel}>
                Time:
              </label>
              <input
                type="time"
                className={Styles.passInput}
                id="exampleInputTime1"
                name="time"
                // value={time}
                
                required
                autoComplete="true"
              />
              <div id="emailHelp" className={Styles.notAct}></div>
              <div className={Styles.formInDiv}>
                <label htmlFor="exampleInputLoc1" className={Styles.emailLabel}>
                  Location:
                </label>
                <input
                  type="text"
                  className={Styles.emailInput}
                  id="exampleInputLoc1"
                  name="location"
                  // value={location}
                
                  required
                  autoComplete="true"
                />
              </div>
              <div className={Styles.formInDiv}>
                <label htmlFor="exampleInputTextArea1" className={Styles.emailLabel}>
                  Details:
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  className={Styles.emailInput}
                  id="exampleInputLoc1"
                  aria-describedby="emailHelp"
                  name="description"
                  // value={description}
                  required
                  autoComplete="true"
                />
              </div>
            </div>
            <button type="submit" className={Styles.btn}>
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
