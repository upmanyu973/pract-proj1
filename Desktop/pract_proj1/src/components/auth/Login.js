import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { validator, Validator } from "../../utils/Validation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isLoadingSelector } from "../../redux/selectors/statusSelector";
import { TYPES } from "../../redux/types/types";
import {
  clearError,
  userLogin,
} from "../../redux/actions/userActions/userActions";
// import { Card, Form, Button } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { errorSelector } from "../../redux/selectors/errorSelector";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

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
  const errors = useSelector(
    (state) => errorSelector([TYPES.LOGIN], state),
    shallowEqual
  );
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
  useEffect(() => {
    dispatch(clearError());
  }, []);

  const validation =
    Object.values(body).filter((item) => item).length == 2 &&
    validator("email", body.email.trim()) &&
    validator("password", body.password);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {" "}
      <Card
        sx={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardContent>
              <Box
                component="form"
                // sx={{
                //   "& > :not(style)": { m: 1, width: "25ch" },
                // }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Password"
                    variant="outlined"
                  />
                </div>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardActions>
              <Button
                className="signin-btn"
                size="large"
                variant="contained"
                color="success"
              >
                Sign In
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
