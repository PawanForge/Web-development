import { useReducer } from "react";


const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (state, action) => {
  console.log(state, action);

  return {
    ...state,
    [action.type]: action.value,
  };
};

function UseReducer() {

  const [state, dispatch] = useReducer(reducer, emptyData);

  console.log(state);

  return (
    <>
      <h1>useReducer Example</h1>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) =>
          dispatch({
            type: "name",
            value: event.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(event) =>
          dispatch({
            type: "password",
            value: event.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(event) =>
          dispatch({
            type: "email",
            value: event.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter City"
        onChange={(event) =>
          dispatch({
            type: "city",
            value: event.target.value,
          })
        }
      />

      <br />
      <br />

  
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(event) =>
          dispatch({
            type: "address",
            value: event.target.value,
          })
        }
      />

      <hr />

      <ul>
        <li>Name: {state.name}</li>
        <li>Password: {state.password}</li>
        <li>Email: {state.email}</li>
        <li>City: {state.city}</li>
        <li>Address: {state.address}</li>
      </ul>
    </>
  );
}

export default UseReducer;
