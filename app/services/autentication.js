export const loginUser = (username, password) => (dispatch, getState) => {
  const { clientID, clientSecret, authUrl } = getState().loginInfo;
  const user = base64ToString(clientID);
  const pass = base64ToString(clientSecret);
  const base64BasicToken = stringToBase64(`${user}:${pass}`);

  return reqwest({
    url: `${authUrl}/token`,
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64BasicToken}`,
    },
    data: {
      username,
      password,
      grant_type: 'password',
    },
    error: () => dispatch(invalidLogin()),
  
  })
    .then(({ access_token, refresh_token }) => {
      dispatch(login(access_token, refresh_token));
      dispatch(loadCurrentUser());
    })
    .catch((error) => {
      if (error.status !== 400 && error.status !== 401) { // not invalid pw or missing user
        console.error(`Something bad happened! ${error.status}: ${error.responseText}`);
      }
    });
};