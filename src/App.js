import { useReducer } from "react";
import "./App.css";

const initial_state = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  age: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        [action.type]: action.payload,
      };

    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };

    case "age":
      return {
        ...state,
        age: action.payload,
      };

    default:
      return initial_state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "reset" });
  };

  return (
    <div className="App">
      <h1>Form State Management With useReducer Hook</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          id="firstName"
          value={state.firstName}
          placeholder="Enter Your First Name"
          name="firstName"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          id="lastName"
          value={state.lastName}
          placeholder="Enter Your Last Name"
          name="lastName"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          value={state.email}
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          value={state.password}
          placeholder="Enter Your Password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="phoneNumber">Phone Number : </label>
        <input
          type="tel"
          id="phoneNumber"
          value={state.phoneNumber}
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="age">Age : </label>
        <input
          type="number"
          id="age"
          value={state.age}
          placeholder="Enter Your Age"
          name="age"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
