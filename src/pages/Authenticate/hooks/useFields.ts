export const useFields = (formType: string) => {
  let fields;

  const LOGIN_FIELDS = [
    { id: 1, label: 'Email', type: 'email', name: 'email' },
    { id: 2, label: 'Password', type: 'password', name: 'password' },
  ];
  const REGISTER_FIELDS = [
    { id: 1, label: 'Email', type: 'email', name: 'email' },
    { id: 2, label: 'Password', type: 'password', name: 'password' },
    {
      id: 3,
      label: 'Confirm password',
      type: 'password',
      name: 'confirtmPassword',
    },
  ];

  if (formType === 'Login') {
    fields = [...LOGIN_FIELDS];
  }
  if (formType === 'Register') {
    fields = [...REGISTER_FIELDS];
  }

  return { fields };
};
