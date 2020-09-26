import { Users } from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});
const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followAC(userId)),
  unfollowUser: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
