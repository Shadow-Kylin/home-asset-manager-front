export function isPhone(phone) {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
}

export function isPassword(pass) {
  // 至少6位,至少包含一个字母和一个数字
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return reg.test(pass);
}

//用户名 /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/ 2-10位，包括汉字、字母、数字和下划线
