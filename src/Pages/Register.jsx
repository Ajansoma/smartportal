import AuthRedirectMessage from '../Components/Auth/AuthRedirectMessage';
import AuthWelcomeMessage from '../Components/Auth/AuthWelcomeMessage';
import AuthImage from '../Components/Auth/AuthImage';
import { registerData } from '../data';
import Form from '../UI/Form';

const Register = () => {
  const onSubmit = function (data) {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={registerData}
          onSubmit={onSubmit}
          isLoginForm={false}
          buttonName="Sign up"
        />
        <AuthRedirectMessage isLogin={false} />
      </div>
    </div>
  );
};

export default Register;
