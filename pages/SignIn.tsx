import Styles from "../styles/Login.module.css";
import useSignIn from "../Hooks/useSignIn";

// import useSignIn from "@/Hooks/useSignIn";

  export default function SignUp() {
    const { values, register, submit } = useSignIn();



    return (
      <div className={Styles.container}>
        <div className={Styles.login}>
          <div className={Styles.head}>
            <p>
              <span className={Styles.mainHeading}>Event Planner Application</span>
            </p>
          </div>
          <p className={Styles.signIn}>Sign In</p>
          <div className={Styles.formDiv}>
            <form className={Styles.mainForm}>
              <div className={Styles.formInDiv}>

                <label htmlFor="exampleInputEmail1" className={Styles.emailLabel}>
                  Enter Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email address"
                  className={Styles.emailInput}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                value={values.email}
                onChange={register}
                />
              </div>

              <div className="sndDiv">
                <label htmlFor="exampleInputPassword1" className={Styles.passLabel}>
                  Password
                </label>

                <input
                  type="password"
                  className={Styles.passInput}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                value={values.password}
                onChange={register}
                />

                <div id="emailHelp" className={Styles.notAct}>
                </div>

              </div>
              <button type="submit" onClick={submit} className={Styles.btn}  >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
