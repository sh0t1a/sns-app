const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
        return {
            user: null,
            isFetching: true, // ログイン処理中
            error: false,
        };
        case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            isFetching: false,
            error: false,
        };
        case "LOGIN_ERROR":
        return {
            user: null,
            isFetching: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default AuthReducer;