import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { OrderSchema, orderSchema } from '../types/schema/orderSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CheckOut from '../pages/CheckOut';

interface Props {}

const OrderProvider: React.FC<Props> = () => {
  const checkoutMethods = useForm<OrderSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(orderSchema),
  });

  return (
    <FormProvider {...checkoutMethods}>
      <CheckOut />
    </FormProvider>
  );
};

export default OrderProvider;
