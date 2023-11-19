import { useOutletContext } from "react-router-dom";

interface followerProps {
    nameOfMyUser: string,
}

function Followers (){
    const {nameOfMyUser} = useOutletContext<followerProps>();
    return <h1>여기는 {nameOfMyUser}의 Follower 공간입니다.</h1>
}
export default Followers;