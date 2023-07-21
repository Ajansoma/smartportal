import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthRedirectMessage from '../Components/Auth/AuthRedirectMessage';
import AuthWelcomeMessage from '../Components/Auth/AuthWelcomeMessage';
import AuthImage from '../Components/Auth/AuthImage';
import { registerData } from '../data';
import Form from '../UI/Form';
import { registerSchema } from '../Components/Schema';
import { auth } from '../firebase';

const Register = () => {
  const [error, setError] = useState(false);

  const onSubmit = function (data) {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
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
          data={registerData}
          onSubmit={onSubmit}
          isLoginForm={false}
          buttonName="Sign up"
          schema={registerSchema}
          invalidDetails={error}
        />
        <AuthRedirectMessage isLogin={false} />
      </div>
    </div>
  );
};

export default Register;
