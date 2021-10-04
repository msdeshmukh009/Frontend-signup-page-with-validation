import "./styles.css";
import { useState } from "react";
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonstatus, setButtonStatus] = useState("");
  const [nameColor, setNameColor] = useState("");
  const [lastNameColor, setLastNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [errorDivStatus, setErrorDivStatus] = useState("none");
  const [passwordError, setPasswordError] = useState("");
  const [passwordError1, setPasswordError1] = useState("✖ A lowercase letter");
  const [passwordError2, setPasswordError2] = useState(
    "✖ A capital (uppercase) letter"
  );
  const [passwordError3, setPasswordError3] = useState("✖ A number");
  const [passwordError4, setPasswordError4] = useState(
    "✖ Minimum 8 characters"
  );

  const [passwordErro1Color, setPasswordErro1Color] = useState("red");
  const [passwordErro2Color, setPasswordErro2Color] = useState("red");
  const [passwordErro3Color, setPasswordErro3Color] = useState("red");
  const [passwordErro4Color, setPasswordErro4Color] = useState("red");

  function validateEmail(emailStr) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailStr).toLowerCase());
  }

  function validatePassword(passwordStr) {
    setPasswordError("");
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (passwordStr.match(lowerCaseLetters)) {
      setPasswordError1("✔  A lowercase letter");
      setPasswordErro1Color("green");
      setButtonStatus("");
    } else {
      setButtonStatus("true");
      setPasswordError1("✖  A lowercase letter");
      setPasswordErro1Color("red");
      setPasswordColor("red");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (passwordStr.match(upperCaseLetters)) {
      setPasswordError2("✔ A capital (uppercase) letter");
      setPasswordErro2Color("green");
      //setButtonStatus("");
    } else {
      setButtonStatus("true");
      setPasswordError2("✖ A capital (uppercase) letter");
      setPasswordErro2Color("red");
      setPasswordColor("red");
    }
    // Validate numbers
    var numbers = /[0-9]/g;
    if (passwordStr.match(numbers)) {
      setPasswordError3("✔ A number");
      setPasswordErro3Color("green");
      //setButtonStatus("");
    } else {
      setButtonStatus("true");
      setPasswordError3("✖ A number");
      setPasswordErro3Color("red");
      setPasswordColor("red");
    }
    // Validate length
    if (passwordStr.length >= 8) {
      setPasswordError4("✔ Minimum 8 characters");
      setPasswordErro4Color("green");
      // setButtonStatus("");
    } else {
      setButtonStatus("true");
      setPasswordError4("✖ Minimum 8 characters");
      setPasswordErro4Color("red");
      setPasswordColor("red");
    }
  }
  // function clickHandler(e) {
  //   e.preventDefault();
  //   if (!firstName) {
  //     setNameColor("hsl(0, 100%, 74%)");
  //     setNameError("First Name cannot be empty");
  //   } else {
  //     setNameColor("lightgreen");
  //     setNameError("");
  //   }
  //   if (!lastName) {
  //     setLastNameColor("hsl(0, 100%, 74%)");
  //     setLastNameError("Last Name cannot be empty");
  //   } else {
  //     setLastNameColor("lightgreen");
  //     setLastNameError("");
  //   }
  //   if (!email) {
  //     setEmailColor("hsl(0, 100%, 74%)");
  //     setEmailError("Email cannot be empty");
  //   } else {
  //     if (validateEmail(email)) {
  //       setEmailColor("lightgreen");
  //       setEmailError("");
  //     } else {
  //       setEmailColor("hsl(0, 100%, 74%)");
  //       setEmailError("Looks like this is not an email");
  //     }
  //   }
  //   if (!password) {
  //     setPasswordColor("hsl(0, 100%, 74%)");
  //     setPasswordError("password cannot be empty");
  //   } else {
  //     //validatePassword(password);
  //     setPasswordError("");
  //     setPasswordColor("lightgreen");
  //   }
  // }
  function clickHandler(e) {
    e.preventDefault();
    if (!firstName) {
      setNameColor("hsl(0, 100%, 74%)");
      setNameError("First Name cannot be empty");
    } else {
      setNameColor("lightgreen");
      setNameError("");
    }
    if (!lastName) {
      setLastNameColor("hsl(0, 100%, 74%)");
      setLastNameError("Last Name cannot be empty");
    } else {
      setLastNameColor("lightgreen");
      setLastNameError("");
    }
    if (!email) {
      setEmailColor("hsl(0, 100%, 74%)");
      setEmailError("Email cannot be empty");
    } else {
      if (validateEmail(email)) {
        setEmailColor("lightgreen");
        setEmailError("");
      } else {
        setEmailColor("hsl(0, 100%, 74%)");
        setEmailError("Looks like this is not an email");
      }
    }
    if (!password) {
      setPasswordColor("hsl(0, 100%, 74%)");
      setPasswordError("password cannot be empty");
    } else {
      //validatePassword(password);
      setPasswordError("");
      setPasswordColor("lightgreen");
    }
  }
  return (
    <div className="App">
      <main>
        <header>
          <h1>
            Start your design <br />
            journey here
          </h1>
          <p>
            Learn to design from industry experts and solve problems that
            matter.
          </p>
          <img src="undraw_Sign_in_re_o58h.svg" alt="signUp" />
        </header>
        <section>
          <div class="trial-notice">
            <p>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </p>
          </div>

          <form>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              style={{ border: "2px solid", borderColor: nameColor }}
              type="text"
              placeholder="First Name"
            />
            <p style={{ color: "red" }}>{nameError}</p>

            <input
              onChange={(e) => setLastName(e.target.value)}
              style={{ border: "2px solid", borderColor: lastNameColor }}
              type="text"
              placeholder="Last Name"
            />
            <p style={{ color: "red" }}>{lastNameError}</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: "2px solid", borderColor: emailColor }}
              type="email"
              placeholder="Email Address"
            />
            <p style={{ color: "red" }}>{emailError}</p>
            <input
              onFocus={() => setErrorDivStatus("block")}
              onBlur={() => setErrorDivStatus("none")}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              style={{ border: "2px solid", borderColor: passwordColor }}
              type="password"
              placeholder="Password"
            />
            <div style={{ display: errorDivStatus }}>
              <h3>Password must contain the following:</h3>
              <p style={{ color: passwordErro1Color }}>{passwordError1}</p>
              <p style={{ color: passwordErro2Color }}>{passwordError2}</p>
              <p style={{ color: passwordErro3Color }}>{passwordError3}</p>
              <p style={{ color: passwordErro4Color }}>{passwordError4}</p>
            </div>
            <p style={{ color: "red" }}>{passwordError}</p>
            <button
              disabled={buttonstatus}
              onClick={(e) => clickHandler(e)}
              type="submit"
            >
              SignUp
            </button>
          </form>
          <div class="terms-notice">
            <p>
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
