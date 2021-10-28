import React, { useEffect } from "react";
import {
  Alert,
  Row,
  Col,
  Form,
  Label,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index";

// router
import { Link, Redirect, useHistory } from "react-router-dom";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// hooks
import { useProfile } from "../../hooks/";

//actions
import { loginUser } from "../../redux/actions";

// components
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper";
import AuthHeader from "../../components/AuthHeader";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";

interface LoginProps {}
const Login = (props: LoginProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const { isUserLogin, error, loginLoading, isUserLogout } = useAppSelector(
    state => ({
      isUserLogin: state.Login.isUserLogin,
      error: state.Login.error,
      loginLoading: state.Login.loading,
      isUserLogout: state.Login.isUserLogout,
    })
  );

  const history: any = useHistory();

  useEffect(() => {
    if (isUserLogin && !loginLoading && !isUserLogout) {
      history.push("/dashboard");
    }
  }, [isUserLogin, history, loginLoading, isUserLogout]);

  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please Enter E-mail."),
      password: yup.string().required("Please Enter Password."),
    })
  );

  const defaultValues: any = {
    email: "admin@themesbrand.com",
    password: "123456",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const onSubmitForm = (values: object) => {
    dispatch(loginUser(values));
  };

  const { userProfile, loading } = useProfile();

  if (userProfile && !loading) {
    return <Redirect to={{ pathname: "/dashboard" }} />;
  }

  return (
    <NonAuthLayoutWrapper>
      <Row className=" justify-content-center my-auto">
        <Col sm={8} lg={6} xl={5} className="col-xxl-4">
          <div className="py-md-5 py-4">
            <AuthHeader
              title="Welcome Back !"
              subtitle="Sign in to continue to Doot."
            />

            {error && <Alert color="danger">{error}</Alert>}

            <Form
              onSubmit={handleSubmit(onSubmitForm)}
              className="position-relative"
            >
              {loginLoading && <Loader />}
              <div className="mb-3">
                <FormInput
                  label="Username"
                  type="text"
                  name="email"
                  register={register}
                  errors={errors}
                  control={control}
                  labelClassName="form-label"
                  placeholder="Enter username"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  register={register}
                  errors={errors}
                  control={control}
                  labelClassName="form-label"
                  className="form-control pe-5"
                  placeholder="Enter Password"
                />
              </div>

              <div className="form-check form-check-info font-size-16">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-check"
                />
                <Label
                  className="form-check-label font-size-14"
                  htmlFor="remember-check"
                >
                  Remember me
                </Label>
              </div>

              <div className="text-center mt-4">
                <Button color="primary" className="w-100" type="submit">
                  Log In
                </Button>
              </div>

              <div className="mt-4 text-center">
                <div className="signin-other-title">
                  <h5 className="font-size-14 mb-4 title">Sign in with</h5>
                </div>
                <Row className="">
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="facebook"
                      >
                        <i className="mdi mdi-facebook text-indigo"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="facebook">
                      Facebook
                    </UncontrolledTooltip>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="twitter"
                      >
                        <i className="mdi mdi-twitter text-info"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="twitter">
                      Twitter
                    </UncontrolledTooltip>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="google"
                      >
                        <i className="mdi mdi-google text-danger"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="google">
                      Google
                    </UncontrolledTooltip>
                  </div>
                </Row>
              </div>
            </Form>

            <div className="mt-5 text-center text-muted">
              <p>
                Don't have an account ?{" "}
                <Link
                  to="/auth-register"
                  className="fw-medium text-decoration-underline"
                >
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </NonAuthLayoutWrapper>
  );
};

export default Login;
