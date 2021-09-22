import React from "react";
import { Redirect, Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default/index";

import { useProfile } from "../hooks/";

const AuthProtected = (props: any) => {
  const { userProfile, loading } = useProfile();

  /*
    redirect is un-auth access protected routes via url
    */
  if (!userProfile && loading) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
