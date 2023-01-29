type validatorProps = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export const validator = (values: validatorProps) => {
  const errors = {} as any;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid format';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (
    values.confirmPassword &&
    values.confirmPassword!.length > 0 &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = 'Passwords not match';
  }
  console.log(errors);
  return errors;
};
