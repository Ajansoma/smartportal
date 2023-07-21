import { useState } from 'react';
import Form from '../UI/Form';
import { loginData } from '../data';
import AuthImage from '../Components/Auth/AuthImage';
import AuthWelcomeMessage from '../Components/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../Components/Auth/AuthRedirectMessage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { loginSchema } from '../Components/Schema';

const Login = () => {
  const [error, setError] = useState(false);
  const onSubmit = function (data) {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
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
          schema={loginSchema}
          invalidDetails={error}
        />
        <AuthRedirectMessage isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
