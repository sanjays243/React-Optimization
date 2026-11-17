
import { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Profile = lazy(() => import("../Pages/Profile"));

function Lazy() {
  const [page, setPage] = useState("home");

  return (
    <div><hr />
      <center><h1>React Lazy Loading</h1></center>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("profile")}>
        Profile
      </button>

      <Suspense fallback={<h3>Loading Component...</h3>}>

        {page === "home" && <Home />}

        {page === "profile" && <Profile />}

      </Suspense>
    </div>
  );
}

export default Lazy;
