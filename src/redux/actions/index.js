export const GET_PROFILE = "GET_PROFILE";

export const GetProfileAction = () => {
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c";

  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
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
      .then((profiles) => {
        console.log(profiles);
        dispatch({
          type: GET_PROFILE,
          payload: profiles,
        });
      })
      .catch((err) => {
        console.log("errore qui", err);
      });
  };
};
