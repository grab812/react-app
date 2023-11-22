// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <div>
      <h1>USERS</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${process.env.PUBLIC_URL}/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
