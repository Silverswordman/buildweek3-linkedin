export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_LIST = "GET_PROFILE_LIST";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const SET_PROFILE = "SET_PROFILE";
export const SET_QUERY = "SET_QUERY";
export const SEARCH_JOBS = "SEARCH_JOBS";
export const RESET_QUERY = "RESET_QUERY";
export const GET_PERSONAL_PROFILE = "GET_PERSONAL_PROFILE";

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
        // console.log(profile);
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

export const getProfileListAction = () => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((profile) => {
        // console.log(profile);
        dispatch({
          type: GET_PROFILE_LIST,
          payload: profile,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const getExperiencesAction = (id) => {
  return async (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        headers: {
          Authorization: key,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((experiences) => {
        // console.log(experiences);
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiences,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const setProfileAction = (obj) => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((profile) => {
        console.log(profile);
        dispatch({
          type: SET_PROFILE,
          payload: profile,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const setQueryAction = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const getJobsListAction = (query) => {
  return async (dispatch) => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`, {
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero dei dati");
        }
      })
      .then((jobs) => {
        dispatch({
          type: SEARCH_JOBS,
          payload: jobs,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const getPersonalProfileAction = () => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
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
        // console.log(profile);
        dispatch({
          type: GET_PERSONAL_PROFILE,
          payload: profile,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};
