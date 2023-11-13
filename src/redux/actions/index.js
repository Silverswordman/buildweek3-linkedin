export const GET_PROFILE = "GET_PROFILE";

const key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c`;

export const getProfileAction = (keyWord) => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${keyWord}`, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero del profilo");
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
        console.log("errore", err);
      });
  };
};
