import { Toast } from "vant";

// 手机号的效验
export const checkPhone = (username) => {
  if (username) {
    const userReg = /^1[3-9]\d{9}$/;
    if (userReg.test(username)) {
      return true
    } else {
      Toast("请正确输入11位手机号");
      return false
    }
  } else {
    Toast("手机号不能为空");
    return false;
  }
};

// 密码的效验
export const checkPwd = (pwd) => {
  if (pwd) {
    const pwdReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    if (pwdReg.test(pwd)) {
      return true
    } else {
      Toast("请输入6-16位字母和数字组合的密码");
      return false
    }
  } else {
    Toast("密码不能为空");
    return false;
  }
};

// 手机验证码的效验
export const chexkCode = (code) => {
  if (code) {
    if (code.length <= 6 && code.length >= 4) {
      return true
    } else {
      Toast("请输入4-6位手机验证码");
      return false
    }
  } else {
    Toast("验证码不能为空");
    return false;
  }
}