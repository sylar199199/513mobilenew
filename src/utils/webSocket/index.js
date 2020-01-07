import store from '@/store/modules/form';

const wsurl = process.env.VUE_APP_WEBSOCK; //ws地址
let websock = '';
let setIntervalWesocketPush = null;

export function createScoket(id) {
  console.log('建立websocket连接')
  websock = new WebSocket(wsurl+id);
  websock.onopen = onopenWS
  websock.onmessage = onmessageWS
  websock.onerror = onerrorWS
  websock.onclose = oncloseWS
};

/**打开WS之后发送心跳 */
export function onopenWS() {
  sendPing() //发送心跳
};

/**WS数据接收统一处理 */
export function onmessageWS(e) {
  let data = e ? JSON.parse(e.data) : []
  if (data.code === 1) {
    store.state.commentList = store.state.commentList.concat(data.data)
  }
};

/**连接失败重连 */
export function onerrorWS() {
  clearInterval(setIntervalWesocketPush)
  websock ? websock.close() : ''
  createSocket() //重连
};

/**关闭WS */
export function oncloseWS() {
  clearInterval(setIntervalWesocketPush)
  websock ? websock.close() : ''
  console.log('websocket已断开')
};

/**发送心跳 */
export function sendPing() {
  websock.send('ping')
  setIntervalWesocketPush = setInterval(() => {
    websock.send('ping')
  }, 30000)
};

/* export default {
  websocketonopen() {
    console.log('WebSocket连接成功')
    this.websock ? this.websock.send('hello websocket') : ''
    console.log(444)
  },
  websocketonerror() {
    console.log('WebSocket连接发生错误')
  },
  websocketonmessage(e) {
    let data = e ? JSON.parse(e.data) : []
    if (data.code === 1) {
      store.state.commentList = store.state.commentList.concat(data.data)
    }
  },
  websocketclose() {
    this.websock ? this.websock.close() : ''
    clearTimeout(this.timer)
    console.log('关闭')
  },
  websocketheartbeat() {
    function fun() {
      this.websock ? this.websock.send('hello websocket') : ''
      console.log(444)
    }
    this.timer = setInterval(fun, 3000)
  },
  initWebSocket() {
    const wsurl = process.env.VUE_APP_WEBSOCK //ws地址
    this.websock = new WebSocket(wsurl)
    this.websock.onopen = this.websocketonopen
    this.websock.onerror = this.websocketonerror
    this.websock.onmessage = this.websocketonmessage
    this.websock.onclose = this.websocketclose
  },
} */
