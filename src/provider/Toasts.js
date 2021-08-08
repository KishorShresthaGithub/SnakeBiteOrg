export const validationMessages = (errorMsgObj, addToast) => {
  let res;

  if (errorMsgObj.error?.length) {
    res = errorMsgObj.error;
  } else {
    res = [{ msg: errorMsgObj.message }];
  }

  res?.forEach((element) => {
    let param =
      element.param && element.param[0].toUpperCase() + element.param.slice(1);

    addToast((param ? param + ": " : "") + element.msg, {
      appearance: "error",
    });
  });
};
