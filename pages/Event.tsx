import React, { useState } from 'react';
import Styles from 'styles/Login.module.css';

export default function Event() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // create a new event object
    const newEvent = {
      title,
      date,
      time,
      location,
      description,
    };

    // clear the form inputs
    setTitle("");
    setDate("");
    setTime("");
    setLocation("");
    setDescription("");
  };

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
          <form className={Styles.mainForm} onSubmit={handleSubmit}>
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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
                value={date}
                onChange={(event) => setDate(event.target.value)}
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
                value={time}
                onChange={(event) => setTime(event.target.value)}
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
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
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
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
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
