import { useSnackbar } from "notistack";

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    success: (message: string) => enqueueSnackbar(message, { variant: "success", preventDuplicate: true }),

    error: (message: string) => enqueueSnackbar(message, { variant: "error", preventDuplicate: true, persist: message.includes("\n") }),

    warning: (message: string) => enqueueSnackbar(message, { variant: "warning", preventDuplicate: true }),

    info: (message: string) => enqueueSnackbar(message, { variant: "info", preventDuplicate: true }),
  };
};
