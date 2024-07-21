import { z } from 'zod';
import { patterns } from '../../utils/Contants';

export const orderSchema = z.object({
  fullName: z.string().min(1, { message: 'Vui lòng nhập họ & tên' }),
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Email',
    })
    .refine((text) => patterns.email.test(text), {
      message: 'Email không hợp lệ',
    }),
  phone: z
    .string()
    .min(1, { message: 'Vui lòng nhập số điện thoại' })
    .refine((text) => /^\d{10}$/.test(text), {
      message: 'Vui lòng nhập đúng số điện thoại',
    }),
  address: z.string().min(10, { message: 'Vui lòng địa chỉ nhận hàng' }),
  city: z.string().min(1, { message: 'Vui lòng chọn Thành phố/ Tỉnh' }),
  village: z.string().min(1, { message: 'Vui lòng chọn Quận/ Huyện' }),
  wards: z.string().min(1, { message: 'Vui lòng chọn Phường/ Xã' }),
});

export type OrderSchema = z.infer<typeof orderSchema>;
