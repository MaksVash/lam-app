import React from 'react';
import Users from "./users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCauntAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCaunt:state.usersPage.totalUsersCaunt,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCaunt: (totalCount) => {
            dispatch(setTotalUsersCauntAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);




