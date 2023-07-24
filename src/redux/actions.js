// Actions are plain JavaScript objects that represent events or updates in the application.
// They are the only source of information that can be sent to the Redux store.
// Actions must have a type property that indicates the type of action being performed.
// The type property is typically represented as a string and is used by the reducers to determine how the state should be updated.
// Apart from the type, actions can also contain additional data (payload) that provides information necessary for the update.

export const increment = (value = 1) => {
  return {
    type: "INCREMENT",
    payload: {
      value,
    },
  };
};

export const decrement = (value = 1) => {
  return {
    type: "DECREMENT",
    payload: {
      value,
    },
  };
};

export const multiply = (value) => {
  return {
    type: "MULTIPLY",
    payload: {
      value,
    },
  };
};

export const divide = (value) => {
  return {
    type: "DIVIDE",
    payload: {
      value,
    },
  };
};

// ASYNC ACTIONS FOR FETCHING DATA FROM THE API
// export const fetchData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("your_api_endpoint");
//       const data = await response.json();
//       // Assuming the API returns an object with a 'counter' property
//       dispatch({
//         type: "SET_COUNTER",
//         payload: {
//           counter: data.counter,
//         },
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
// };

// export const updateData = (counter) => {
//   return async (dispatch) => {
//     try {
//       // Assuming your API endpoint for updating data is 'your_api_endpoint'
//       await fetch("your_api_endpoint", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ counter }),
//       });
//       // Dispatch an action to update the local state in the store
//       dispatch({
//         type: "UPDATE_COUNTER",
//         payload: {
//           counter,
//         },
//       });
//     } catch (error) {
//       console.error("Error updating data:", error);
//     }
//   };
// };
