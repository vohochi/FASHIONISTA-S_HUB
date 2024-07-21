import { z } from 'zod';
import { patterns } from '../../utils/Contants';

// Schema đăng nhập (giữ nguyên)
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Email',
    })
    .refine((text) => patterns.email.test(text), {
      message: 'Email không hợp lệ',
    }),
  password: z.string().min(1, { message: 'Vui lòng nhập mật khẩu' }),
});

// Schema đăng ký (mới)
export const registerSchema = z
  .object({
    fullName: z.string().min(1, { message: 'Vui lòng nhập họ & tên' }),
    email: z
      .string()
      .min(1, {
        message: 'Vui lòng nhập Email',
      })
      .refine((text) => patterns.email.test(text), {
        message: 'Email không hợp lệ',
      }),
    password: z
      .string()
      .min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
    password2: z.string().min(1, { message: 'Vui lòng xác nhận mật khẩu' }),
    imgUrl: z.string().url({ message: 'URL hình ảnh không hợp lệ' }).optional(),
  })
  .refine((data) => data.password === data.password2, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['password2'],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
