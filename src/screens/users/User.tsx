
import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";
import { Link } from "react-router-dom";

function User(){
    const {userId} = useParams();
    return (
        <div>
            <h1>유저 아이디는 {userId}이고 이름은 {users[Number(userId)-1].name} </h1>
            <Link to="followers">see Followers</Link>
            <Outlet context={{
                nameOfMyUser: users[Number(userId)-1].name,
            }}/>
        </div>
    )
}
export default User;