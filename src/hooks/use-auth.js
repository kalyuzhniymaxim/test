import { useSelector } from "react-redux";
export function useAuth() {
    const {email, token, id} = useSelector(state => state.user)

    return {
        isAth: !!email,
        email,
        token,
        id,
    };
}