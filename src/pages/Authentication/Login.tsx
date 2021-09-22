import React from "react";
import { Container, Row, Col, Form, Label, Button } from "reactstrap";

// redux
import { useSelector, useDispatch } from "react-redux";

// router
import { Link, Redirect } from "react-router-dom";

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

interface LoginProps { }
const Login = (props: LoginProps) => {

  const resolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .required("Please Enter E-mail."),
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
  const dispatch = useDispatch();

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

            <Form onSubmit={handleSubmit(onSubmitForm)}>
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
                <Button
                  color="primary"
                  className="w-100"
                  type="submit"
                >
                  Log In
                </Button>
              </div>


              <div className="mt-4 text-center">
                <div className="signin-other-title">
                  <h5 className="font-size-14 mb-4 title">
                    Sign in with
                  </h5>
                </div>
                <Row className="">
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Facebook"
                      >
                        <i className="mdi mdi-facebook text-indigo"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Twitter"
                      >
                        <i className="mdi mdi-twitter text-info"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        title="Google"
                      >
                        <i className="mdi mdi-google text-danger"></i>
                      </button>
                    </div>
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
