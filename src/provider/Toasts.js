export const validationMessages = (errorMsgObj, addToast) => {
  const res = errorMsgObj.error?.errors || [{ msg: errorMsgObj.message }];

  res?.forEach((element) => {
    addToast(element.msg || element.messages, { appearance: "error" });
  });
};
