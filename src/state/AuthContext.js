import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// 最初のユーザー状態を定義
const initialState = {
    // user: null,
    user: {
        _id: "6905940af9ff6816023baabb",
        username: "shin",
        email: "shincode@gmail.com",
        password: "abcdef",
        profilePicture: "/person/1.jpeg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false
    },  
    isFetching: false,
    error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

// コンポーネントツリー全体で状態を利用できるようにする
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        // {children} は AuthContextProvider で囲まれたコンポーネントを指す(例: App コンポーネント)
        <AuthContext.Provider 
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

