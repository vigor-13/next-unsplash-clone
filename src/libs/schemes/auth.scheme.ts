import { z } from 'zod';

export const SignupFormSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: '사용자 이름은 필수 입력 항목입니다.' })
    .trim(),
  last_name: z.string().trim(),
  email: z
    .string()
    .email({ message: '유효한 이메일 주소를 입력해 주세요.' })
    .trim(),
  name: z
    .string()
    .min(1, { message: '사용자 이름은 필수 입력 항목입니다.' })
    .regex(/^[\p{L}0-9_]+$/u, {
      message: '문자, 숫자 및 밑줄만 사용할 수 있습니다.',
    })
    .trim(),
  password: z
    .string()
    .min(8, { message: '최소 8자 이상이어야 합니다.' })
    .regex(/[a-zA-Z]/, { message: '최소 한 개의 문자를 포함해야 합니다.' })
    .regex(/[0-9]/, { message: '최소 한 개의 숫자를 포함해야 합니다.' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: '문자, 숫자 및 밑줄만 사용할 수 있습니다.',
    })
    .trim(),
});

export type SignupFormState =
  | {
      errors?: {
        first_name?: string[];
        last_name?: string[];
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
