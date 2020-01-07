let imgUrl;

if (process.env.NODE_ENV === 'development') {
  // imgUrl = 'http://front.513online.top/front'
  imgUrl = 'https://front.513online.top/mobile'
} else {
  imgUrl = 'https://front.513.com/mobile'
  //imgUrl = 'https://front.513online.top/mobile'
}

export { imgUrl }
