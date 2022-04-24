const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getIsFetchingCurrentUser,
  getUserName,
};

export default authSelectors;