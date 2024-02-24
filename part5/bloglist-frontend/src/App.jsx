import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";
import FormBlog from "./components/FormBlog";
import FormLogin from "./components/FormLogin";
import { getJWT } from "./utils/jwt";

const App = () => {
  const [logIn, setLogIn] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [valuesEdit, setValuesEdit] = useState({})
  
  useEffect(() => {
    const token = getJWT()
    if(token !== null){
      setLogIn(true)
    }
  }, [])
  

  return (
    <>
      {!logIn ? (
        <div className="d-flex  w-100 vh-100 justify-content-center align-items-center">
          <FormLogin setLogIn={setLogIn}/>
        </div>
      ) : (
        <div>
          <nav className="bg-dark p-2">
            <button>Log Out</button>
          </nav>

          <div className="container mx-auto row">
            <FormBlog setLogIn={setLogIn} setBlogs={setBlogs} />
            <BlogList setLogIn={setLogIn} setBlogs={setBlogs} blogs={blogs} />
          </div>
        </div>
    
      )}
    </>
  );
};

export default App;
