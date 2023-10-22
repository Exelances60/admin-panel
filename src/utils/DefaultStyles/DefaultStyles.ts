import i18next from "i18next";

export const DefaultStyles = {
  layout: "w-full h-full p-3 box-border -z-20 ",
  home: {
    taskDiv:
      "w-full h-[30vh] mb-5 bg-white rounded-sm flex flex-col p-5 box-border shadow-md",
  },
  card: {
    cartButton:
      "fixed bottom-96 right-0 z-10 bg-white text-2xl text-center font-bold flex items-center justify-center rounded-full",
    cardComponet:
      "cursor-pointer hover:shadow-xl ease-in duration-200 shadow-md hover:-translate-y-1",
  },
  product: {
    priceP:
      "product-description overflow-hidden text-ellipsis max-h-12 font-bold text-black text-xl ",
  },
  users: {
    userHeader: {
      div: "w-full h-[10vh] flex items-center justify-between box-border p-5",
      h1: "text-2xl font-bold text-black",
    },
  },
};

export const success = (messageApi: any, msg: string) => {
  return messageApi.open({
    type: "success",
    content: i18next.t(msg),
  });
};
