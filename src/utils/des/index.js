import CryptoJS from 'crypto-js';

//DES加密
export const encryptBy = message => {
  let key = '1363144e-8087-401c-8060-34ec1edcafec'
  function encryptByDES(message, key) {
    let keyHex = CryptoJS.enc.Utf8.parse(key)
    let option = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    let encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
    return encrypted.ciphertext.toString()
  }
  return encryptByDES(message, key)
}
//DES解密
export const decryptBy = message => {
  let key = '1363144e-8087-401c-8060-34ec1edcafec'
  //DES  ECB模式解密
  function decryptByDES(message, key) {
    let keyHex = CryptoJS.enc.Utf8.parse(key)
    let decrypted = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Hex.parse(message),
      },
      keyHex,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      },
    )
    let result_value = decrypted.toString(CryptoJS.enc.Utf8)
    return result_value
  }
  return decryptByDES(message, key)
}
