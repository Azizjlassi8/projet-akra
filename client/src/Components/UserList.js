import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../JS/Actions/useraction";
import UserCard from "./UserCard";

const UserList = () => {
    const listUsers = useSelector(
        (state) => state.listUser.listUsers
    );
    const load = useSelector((state) => state.userReducer.load);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getUsers());
    }, [dispatch]);
    
    return ( 
    <div>
        { load ? (
            <h2>Loading ..</h2>
        ) : (
            listUsers.map((el) => <UserCard user={el} key={el.id} />)
        )}
    </div>
    );
};



export default UserList;