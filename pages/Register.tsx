import Styles from "../styles/register.module.css";
import useSignUp from "../Hooks/useSignUp";

export default function SignUp() {
  const { values, register, submit } = useSignUp();


  return (
    <div className={Styles.container}>
      <div className={Styles.login}>
        <div className={Styles.head}>
          <p>
            <span className={Styles.mainHeading}>Event Planner Application</span>
          </p>
        </div>
        <p className={Styles.signIn}>Sign up</p>
        <div className={Styles.formDiv}>
          <form className={Styles.mainForm}>
            <div className={Styles.formInDiv}>
              <label htmlFor="exampleInputEmail1" className={Styles.emailLabel}>
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter username or email address"
                className={Styles.emailInput}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={register}

                required
                autoComplete="true"
              />
            </div>
            <div className="sndDiv">
              <label htmlFor="exampleInputPassword1" className={Styles.passLabel}>
                User Name
              </label>
              <input
                type="text"
                className={Styles.passInput}
                id="exampleInputPassword1"
                placeholder="User Name"
                name="userName"
              value={values.userName}
              onChange={register}


              />
            </div>
            <div className="sndDiv" >
              <label htmlFor="exampleInputEmail1" className={Styles.passLabel}>
                Contact Number
              </label>
              <input
                placeholder="Contact Number"
                type="text"
                className={Styles.passInput}
                id="exampleInputEmail1"
                name="phoneNumber"
                value={values.phoneNumber}
                aria-describedby="emailHelp"
              onInput={register}



              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className={Styles.passLabel}>
                Password
              </label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className={Styles.passInput}
                value={values.password}
                id="exampleInputPassword1"
                onChange={register}
                required
                autoComplete="true"
              />
              <div id="emailHelp" className={Styles.notAct}>

              </div>
            </div>
       
            <button type="submit" className={Styles.btn} onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
