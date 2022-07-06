import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { validator, Validator } from "../../utils/Validation";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingSelector } from "../../redux/selectors/statusSelector";
import { TYPES } from "../../redux/types/types";
import { userLogin } from "../../redux/actions/userActions/userActions";
import { Card, Form, Button } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const windowHeight = window.innerHeight;
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );
  console.log("isjvh", isLoading);
  const dispatch = useDispatch();
  const onChangeText = async (key, value) => {
    let obj = { ...body };
    obj[key] = value;
    console.log("kkkk", obj);
    setBody(obj);
  };
  const handleSubmit = () => {
    dispatch(
      userLogin(
        { ...body, email: body?.email.trim().toLocaleLowerCase() },
        () => {
          navigate("/home");
        }
      )
    );
  };
  const validation =
    Object.values(body).filter((item) => item).length == 2 &&
    validator("email", body.email.trim()) &&
    validator("password", body.password);
  return (
    <div className="bgImg" style={{ height: windowHeight }}>
      <Card className="login-card-container">
        <Card className="login-innner-card">
          <Card.Body>
            <Card.Title className="login-innner-card-title">SIGN IN</Card.Title>

            <Card.Link className="card-link">
              <FacebookIcon sx={{ color: "black", marginRight: "20px" }} />
              <TwitterIcon sx={{ color: "black", marginRight: "20px" }} />
              <GoogleIcon sx={{ color: "black", marginRight: "20px" }} />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card.Body>
          <Card.Text>
            <Form>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    value={body.email}
                    onChange={(e) => {
                      setEmailValid(true);
                      onChangeText("email", e.target.value);
                    }}
                    autoComplete="new-email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={body.password}
                    autoComplete="none"
                    onChange={(e) => {
                      onChangeText("password", e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
              <div></div>
            </Form>
          </Card.Text>
          <Button
            variant="primary"
            type="submit"
            disabled={!validation}
            onClick={() => handleSubmit()}
            className="signin-btn"
          >
            {isLoading ? "Loading..." : "LOGIN"}
          </Button>
          <div
            style={{
              color: "cornflowerblue",
              marginTop: "10px",
              cursor: "Pointer",
            }}
            onClick={() => navigate("/forgotPassword")}
          >
            Forgot Password?
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
