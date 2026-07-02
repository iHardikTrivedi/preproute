import { useNotification } from "@/hooks/useNotification";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

import AppButton from "@/components/common/AppButton";
import AppPasswordField from "@/components/form/AppPasswordField";
import AppTextField from "@/components/form/AppTextField";

import { getApiErrorMessage } from "@/utils/apiError";
import { LOGIN_TEXT } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { useLogin } from "../hooks/useLogin";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";

const LoginForm = () => {
  const { login: loginRequest, isPending } = useLogin();
  const { login } = useAuth();
  const notification = useNotification();

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginRequest(data);
      login(response);
      notification.success("Login successful.");
    } catch (error) {
      if (error instanceof Error) {
        notification.error(getApiErrorMessage(error as never));
      } else {
        notification.error("Something went wrong.");
      }
    }
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <AppTextField
        control={control}
        name="userId"
        label={LOGIN_TEXT.USER_ID}
        placeholder={LOGIN_TEXT.USER_ID_PLACEHOLDER}
      />

      <AppPasswordField
        control={control}
        name="password"
        label={LOGIN_TEXT.PASSWORD}
        placeholder={LOGIN_TEXT.PASSWORD_PLACEHOLDER}
      />

      <Link
        component="button"
        type="button"
        underline="hover"
        sx={{
          alignSelf: "flex-start",
        }}
      >
        {LOGIN_TEXT.FORGOT_PASSWORD}
      </Link>

      <AppButton type="submit" loading={isPending}>
        {LOGIN_TEXT.LOGIN}
      </AppButton>
    </Stack>
  );
};

export default LoginForm;
