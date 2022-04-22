import Validator from 'validator';
import isEmpty from './is-empty';

const userInfoValidation = (data) => {
  let errorMsgs = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.known_as = !isEmpty(data.known_as) ? data.known_as : '';
  data.id_num = !isEmpty(data.id_num) ? data.id_num : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';

  if (Validator.isEmpty(data.email)) {
    errorMsgs.email = 'required';
  } else if (!Validator.isEmail(data.email)) {
    errorMsgs.email = 'Invalid email';
  }

  if (Validator.isEmpty(data.firstName)) {
    errorMsgs.firstName = 'required';
  }

  if (Validator.isEmpty(data.lastName)) {
    errorMsgs.lastName = 'required';
  }

  if (Validator.isEmpty(data.known_as)) {
    errorMsgs.known_as = 'required';
  }

  if (Validator.isEmpty(data.id_num)) {
    errorMsgs.id_num = 'required';
  } else if (!Validator.isNumeric(data.id_num)) {
    errorMsgs.id_num = 'Invalid type';
  } else if (!Validator.isLength(data.id_num, { min: 13, max: 13 })) {
    errorMsgs.id_num = 'Invalid length';
  }

  if (Validator.isEmpty(data.address)) {
    errorMsgs.address = 'required';
  }

  if (Validator.isEmpty(data.mobile)) {
    errorMsgs.mobile = 'required';
  } else if (!Validator.isMobilePhone(data.mobile, 'any', { strictMode: true })) {
    errorMsgs.mobile = 'Invalid value';
  }

  return {
    errorMsgs,
    isValid: isEmpty(errorMsgs)
  };
};

export default userInfoValidation;