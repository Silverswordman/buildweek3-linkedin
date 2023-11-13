export const GET_PROFILE = "GET_PROFILE";



export const GetProfileAction = () => {
  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTlkZGM1NWU3ZTAwMT
  hmODNiZmYiLCJpYXQiOjE2OTk4NjcxMDIsImV4cCI6MTcwMTA3NjcwMn0.yX3_cvha-xvT0my5LvApLnk9QkLTGfJjfaT2RY_RL6M`;

  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero profili");
        }
      })
      .then((profile) => {
        console.log(profile);
        dispatch({
          type: GET_PROFILE,
          payload: profile,
        });
      })
      .catch((err) => {
        console.log("errore qui", err);
      });
  };
};
