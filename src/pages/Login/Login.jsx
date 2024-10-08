import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };

        // get access token
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((data) => {
            console.log(data.data);
            if (data.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold pb-6 text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811]">Login</button>
              </div>
            </form>
            <p className="text-center pb-4">
              New To Car Doctors{" "}
              <Link to="/signUp" className="text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
