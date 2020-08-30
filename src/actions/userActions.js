export const loginUser = (data) => {
  return {
    type: 'LOGIN_USER',
    data
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  }
};