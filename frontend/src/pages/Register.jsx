import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
// hook the form up to redux
import { useSelector, useDispatch } from "react-redux";
// bring in register action
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });
  const { name, email, email2, password, password2 } = formData;
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // bring in pieces of state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    } // redirect when loggedin
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    //validate that pw and email match then send data to back end, get token back
    e.preventDefault();
    if (email !== email2) {
      toast.error("Emails do not match");
    }
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      // dispatch register from authSlice.js when form is submitted
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser>Register</FaUser>
        </h1>
        <p>Create account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="email2"
              className="form-control"
              id="email2"
              name="email2"
              value={email2}
              onChange={onChange}
              placeholder="Re Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
