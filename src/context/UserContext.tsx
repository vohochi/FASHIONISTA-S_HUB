import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  LoginSchema,
  loginSchema,
  RegisterSchema,
  registerSchema,
} from '../types/schema/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

interface Props {}

type FormType = 'login' | 'register';

const UserProvider: React.FC<Props> = () => {
  const [formType, setFormType] = useState<FormType>('login');

  const loginMethods = useForm<LoginSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  });

  const registerMethods = useForm<RegisterSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(registerSchema),
  });

  const switchForm = (type: FormType) => {
    setFormType(type);
  };

  return (
    <>
      {formType === 'login' && (
        <FormProvider {...loginMethods}>
          <LogIn
            onSwitchToRegister={() => {
              switchForm('register');
            }}
          />
        </FormProvider>
      )}
      {formType === 'register' && (
        <FormProvider {...registerMethods}>
          <Register onSwitchToLogin={() => switchForm('login')} />
        </FormProvider>
      )}
    </>
  );
};

export default UserProvider;
