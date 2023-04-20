import React, { useContext, createContext } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const notify = (message, options = null) => toast(message, options);

  const info = (message, options = null) => toast.info(message, options);

  const success = (message, options = null) => toast.success(message, options);

  const warning = (message, options = null) => toast.warn(message, options);

  const error = (message, options = null) => toast.error(message, options);

  const loading = (message, options = null) => toast.loading(message, options);

  const updateToast = (toastId, options) => toast.update(toastId, options);

  const toastPromise = (
    promise,
    options = {
      pending: "Loading...",
      success: "Loading success!",
      error: "Loading error!",
    }
  ) => toast.promise(promise, options);

  return (
    <ToastContext.Provider
      value={{
        notify,
        info,
        success,
        warning,
        error,
        loading,
        updateToast,
        toastPromise,
      }}>
      <ToastContainer
        containerId="notifications-main"
        position="top-center"
        transition={Slide}
        newestOnTop
        theme="dark"
      />
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);

  return {
    notify: context.notify,
    info: context.info,
    success: context.success,
    warning: context.warning,
    error: context.error,
    loading: context.loading,
    updateToast: context.updateToast,
    toastPromise: context.toastPromise,
  };
};
