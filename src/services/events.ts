import EventEmitter from './emitter'

export enum Events {
  showException = 'showException',
  handleError = 'handleError',
  showNotice = 'showNotice',
}

export const initEventListener = () => {
  EventEmitter.addListener(Events.handleError, ({ error, code, message }) => {
    console.error({ error, code, message })
  })
}

export default initEventListener
