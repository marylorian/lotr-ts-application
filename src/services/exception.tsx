import EventEmitter from './emitter'
import {Events} from "./events";

interface ExceptionProps {
    error?: string
    code?: number
    message: string
}

class ExceptionService {
    static showException = (params: ExceptionProps) => {
        EventEmitter.emit(Events.showException, params)
    }

    static handleError = (params: ExceptionProps) => {
        EventEmitter.emit(Events.handleError, params)

        throw params.error
    }
}

export default ExceptionService
