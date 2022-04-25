import Validator from 'validator';
import isEmpty from './is-empty';

const signupValidation = (data) => {
  let errorMsgs = {};

  data.email = !isEmpty(data.email) ? data.email.toString() : '';
  data.password = !isEmpty(data.password) ? data.password.toString() : '';
  data.password2 = !isEmpty(data.password2) ? data.password2.toString() : '';

  if (Validator.isEmpty(data.email)) {
    errorMsgs.email = 'required';
  }

  if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
    errorMsgs.email = 'Invalid email';
  }

  if (Validator.isEmpty(data.password)) {
    errorMsgs.password = 'required';
  }

  // if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
  //   errorMsgs.password = 'Password must be at least 6 characters';
  // }

  if (!Validator.isEmpty(data.password) && Validator.isEmpty(data.password2)) {
    errorMsgs.password2 = 'required';
  }

  if (!Validator.isEmpty(data.password) && !Validator.isEmpty(data.password2) && !Validator.equals(data.password, data.password2)) {
    errorMsgs.password2 = 'Not match';
  }

  return {
    errorMsgs,
    isValid: isEmpty(errorMsgs)
  };
};

export default signupValidation;