// ユーザー入力に応じたアクションの設定
export const LoginStart = (user) => ({
    type: 'LOGIN_START',
});

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user, // ユーザーデータをペイロードとして渡す
});

export const LoginError = (error) => ({
    type: 'LOGIN_ERROR',
    payload: error, // エラーメッセージをペイロードとして渡す
});