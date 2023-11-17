export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_LIST = "GET_PROFILE_LIST";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const SET_PROFILE = "SET_PROFILE";
export const SET_QUERY = "SET_QUERY";
export const SEARCH_JOBS = "SEARCH_JOBS";
export const RESET_QUERY = "RESET_QUERY";
export const SET_KEY = "SET_KEY";
export const GET_PERSONAL_PROFILE = "GET_PERSONAL_PROFILE";
export const SET_IMAGE = "SET_IMAGE";
export const GET_COMMENTS = "GET_COMMENTS";
export const SET_COMMENTS = "SET_COMMENTS";

const key = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTllZGM1NWU3ZTAwMThmODNjMDAiLCJpYXQiOjE2OTk4NjcxMTcsImV4cCI6MTcwMTA3NjcxN30.gkoLxXA055IvgniaKrq1Qdv-mUWblGM48riIp10MI9c`;

const keyComments =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU3MzMyZDgyMGJjZjAwMTg4NWZmYjQiLCJpYXQiOjE3MDAyMTM1NDksImV4cCI6MTcwMTQyMzE0OX0.s7IoR44sQ5hYmwZaPPdAucQEdoVExjjQ_QgmQZzDeA0";

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
        dispatch(getPersonalProfileAction());
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
export const setKeyAction = (key) => ({
  type: SET_KEY,
  payload: key,
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

export const setImageProfileAction = (id, formData) => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: key,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            "errore nel caricamento dell' immagine",
            res.status,
            res.statusText
          );
        }
      })
      .then((data) => {
        const imageUrl = data?.imageUrl || "";
        dispatch({
          type: SET_IMAGE,
          payload: imageUrl,
        });
        dispatch(getPersonalProfileAction());
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const getCommentsAction = () => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      headers: {
        Authorization: keyComments,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel recupero dei commenti");
        }
      })
      .then((comments) => {
        // console.log(profile);
        dispatch({
          type: GET_COMMENTS,
          payload: comments,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};

export const setCommentsAction = (query, id) => {
  return async (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify({
        comment: query,
        rate: "1",
        elementId: id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: keyComments,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel invio dei commenti");
        }
      })
      .then((comments) => {
        dispatch({
          type: SET_COMMENTS,
          payload: comments,
        });
        dispatch(getCommentsAction());
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
};
