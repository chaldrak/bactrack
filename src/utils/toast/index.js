import { toast } from "react-toastify";

const options = {
  theme: "colored",
  autoClose: 3000,
  hideProgressBar: true,
};

export const errorToast = (message) => {
  toast.error(message, options);
};
