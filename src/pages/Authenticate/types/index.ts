export type AuthCompProps = {
  authType: 'Login' | 'Register';
  setAuthType: (type: string) => void;
};

export type FieldsProps = {
  id: number;
  label: string;
  type: string;
  name: 'email' | 'password' | 'confirmPassword';
};
