import i18next from "i18next";

export const DefaultStyles = {
  layout: "w-full h-full p-3 box-border -z-20 ",
};

export const success = (messageApi: any, msg: string) => {
  return messageApi.open({
    type: "success",
    content: i18next.t(msg),
  });
};
