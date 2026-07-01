import { useCallback, useState } from "react";

export default function useDisclosure(initialState = false) {
  const [open, setOpen] = useState(initialState);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
