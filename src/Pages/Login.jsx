import Form from '../UI/Form';
import { loginData } from '../data';
import AuthImage from '../Components/Auth/AuthImage';
import AuthWelcomeMessage from '../Components/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../Components/Auth/AuthRedirectMessage';

const Login = () => {
  const onSubmit = function (data) {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={loginData}
          onSubmit={onSubmit}
          isLoginForm={true}
          buttonName="Sign in"
        />
        <AuthRedirectMessage isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
