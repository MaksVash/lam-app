const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CARENT_PAGE="SET_CARENT_PAGE";
const SET_TOTAL_USERS_CAUNT='SET_TOTAL_USERS_CAUNT'
let initialState = {
    users: [ ],
    pageSize:5,
    totalUsersCaunt:0,
    currentPage:3
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CARENT_PAGE: {
            return { ...state, currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_CAUNT: {
            return { ...state, totalUsersCaunt:action.count}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurrentPageAC =(currentPage)=>({type:SET_CARENT_PAGE,currentPage})
export const setTotalUsersCauntAC =(totalUsersCaunt)=>({type:SET_TOTAL_USERS_CAUNT,count:totalUsersCaunt})

export default usersReducer;



