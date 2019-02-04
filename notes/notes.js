const usersActions = makeAPIActionCreators({
    entity: 'users', // required
    actionPrefix: 'fetch', // optional
    delimiter: `_`, // optional
    method: 'GET', // required]
    selectors: {
        itemId: action => action.payload.itemId,
    },
});

export default apiReducer({
    actionTypes: {
        REQUEST: usersActions.types.REQUEST,
    },
    // or just
    // actionTypes: usersActions.types,
    initialState: {
        isFetching: true,
        error: {
            some: '',
            custom: '',
            props: {},
        },
    },
});

// <!-- usersActions.types -->
// <!-- usersActions.creators -->

/**
 * @param {Shape} {
 *      @param {Number} page
 *      @param {Number} amount
 *      @param {String} orderBy
    }
 * @type {Number}
*/
usersActions.creators.fetchUsersRequest({
    page: 1,
    amount: 20,
    orderBy: '',
    // ...
});

usersActions.creators.fetchUserRequest(userId);

// FETCH_USERS_PREREQUEST
//     - DEBOUNCE INPUT
// FETCH_USERS_REQUEST
//     - MAKE AN API REQUEST
// FETCH_USERS_SUCCESS
//     - RECEIVE DATA
// FETCH_USERS_FAILURE
//     -  RECEIVE ERROR
// FETCH_USERS_INVALIDATE
//     - CANCEL REQUEST
// FETCH_USERS_

// TODO: add resetReducer (+the other reducer from the thsare projecct)
