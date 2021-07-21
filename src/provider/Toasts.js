export const validationMessages = (errorMsgObj, addToast) => {
  const res = errorMsgObj.error?.errors || [{ msg: errorMsgObj.message }];

  res?.forEach((element) => {
    let param =
      element.param && element.param[0].toUpperCase() + element.param.slice(1);

    if (!element.msg || !element.messages) {
      addToast("Something went wrong", {
        appearance: "error",
      });
      return;
    }

    addToast(param + ": " + element.msg || element.messages, {
      appearance: "error",
    });
  });
};
