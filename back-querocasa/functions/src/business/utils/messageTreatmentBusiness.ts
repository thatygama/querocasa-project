import { MessageTreatment } from "../../interfaces/utils/MessageTreatment";

class MessageTreatmentBusiness {
    
    successMsg = (message: string, response?: any): MessageTreatment => {
        let _message: MessageTreatment = { message: `Sucesso: ${message}`, status: 200, response: response};
        return _message;
    }

    infoMsg = (message: string, info?: any): MessageTreatment => {
        let _message: MessageTreatment = { message: message, status: 250, response: info};
        return _message;
    }

    notAcceptable = (message: string, data?: any): MessageTreatment => {
        let _message: MessageTreatment = { message: `Erro: ${message}`, status: 406, response: data};
        return _message;
    }

    badRequest = (message: string, error?: any): MessageTreatment => {
        let _message: MessageTreatment = { message: `Erro: ${message}`, status: 400, response: error};
        return _message;
    }
}

export const messageTreatmentBusiness = new MessageTreatmentBusiness();