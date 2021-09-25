import { toast } from "react-toastify";

const showSuccessNotification = (message: string) => {
  console.log("AAA");
  toast.success(message);
};

const showErrorNotification = (error: string) => {
  toast.error(error);
};

export { showSuccessNotification, showErrorNotification };
