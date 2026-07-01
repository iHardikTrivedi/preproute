import { PASSWORD, USERID } from "@/config/constants";
import { VALIDATION_MESSAGES } from "@/config/messages";
import { z } from "zod";

export const loginSchema = z.object({
  userId: z
    .string()
    .trim()
    .min(1, VALIDATION_MESSAGES.REQUIRED_USER_ID)
    .max(USERID.MAX_LENGTH, VALIDATION_MESSAGES.USER_ID_MAX(USERID.MAX_LENGTH)),

  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.REQUIRED_PASSWORD)
    .min(PASSWORD.MIN_LENGTH, VALIDATION_MESSAGES.PASSWORD_MIN(PASSWORD.MIN_LENGTH))
    .max(PASSWORD.MAX_LENGTH, VALIDATION_MESSAGES.PASSWORD_MAX(PASSWORD.MAX_LENGTH)),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
