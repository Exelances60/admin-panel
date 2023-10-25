import i18next from "i18next";

export const NotificationMessage = (api: any, message: string) => {
  return api.info({
    message: i18next.t(`Error: ${message}`),
    placement: "topLeft",
    style: {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
  });
};
