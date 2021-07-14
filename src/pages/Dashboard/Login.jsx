import React from "react";
import LoginForm from "../../components/Dashboard/LoginForm";

function Login() {
  /*   const history = useHistory();
  const { access_token } = useToken();

  useLayoutEffect(() => {
    if (access_token) {
      history.push("/d_home");
    }
  }, [history, access_token]); */

  return (
    <div className="bg_primary p-4 md:py-28 h-full md:h-screen">
      <div className="container mx-auto md:px-40">
        <div className="grid md:grid-cols-2 shadow-lg">
          <div className="bg-gray-100">
            <h1 className="text-xl font-bold px-4 md:px-10 mt-12 mb-2">
              SNAKEBITE NEPAL
            </h1>
            <LoginForm />
          </div>
          <div className="bg_primary text-white h-96">
            <img
              src="https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bg "
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
