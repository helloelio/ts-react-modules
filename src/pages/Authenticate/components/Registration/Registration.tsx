import React, { useRef } from 'react';
import { Formik } from 'formik';
import { AuthCompProps, FieldsProps } from '../../types';
import { validator } from '@/utils';
import { useFields } from '../../hooks/useFields';

import styles from '@/pages/Authenticate/styles/style.module.scss';

export const Registration: React.FC<AuthCompProps> = ({
  authType,
  setAuthType,
}) => {
  const { fields } = useFields(authType);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const togglePasswordVissible = (): void => {
    if (passwordRef.current?.type === 'text') {
      //   passwordRef.current?.type
    } else {
      //   passwordRef.current?.type = 'text';
    }
  };

  return (
    <div className={styles.rootForm}>
      <h1>Registration</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validate={validator}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            {fields?.map(({ id, label, type, name }: FieldsProps) => {
              return (
                <div key={id} className={styles.inputWrapper}>
                  <label className={styles.label}>{label}</label>
                  <input
                    className={styles.input}
                    ref={usernameRef}
                    id="login"
                    type={name}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                  />
                  <span className={styles.error}>
                    {errors[name] && touched[name] && errors[name]}
                  </span>
                </div>
              );
            })}
            <button
              className={styles.submitInput}
              type="submit"
              disabled={!values.email || !values.password || isSubmitting}
            >
              Register
            </button>
          </form>
        )}
      </Formik>
      <button
        onClick={() => setAuthType('Login')}
        className={styles.changeAuth}
      >
        Login
      </button>
    </div>
  );
};
