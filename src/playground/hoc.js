import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is a private info. Please don't  share. </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// const AdminInfo = withAdminWarning (Info);

const requireAuthentication = WrapperComponent => {
  return props => (
    <div>
      {props.isAuthenticate
        ? <div>
            <p>This is your message.</p>
            <WrapperComponent {...props}/>
          </div>
        : <p>Please Authenticate!</p>}
    </div>
  );
};
const AuthInfo = requireAuthentication (Info);

// ReactDOM.render (
//   <AdminInfo isAdmin={true} info="This is the detail." />,
//   document.getElementById ('app')
// );

ReactDOM.render (
  <AuthInfo isAuthenticate={true} info="This is the detail." />,
  document.getElementById ('app')
);
