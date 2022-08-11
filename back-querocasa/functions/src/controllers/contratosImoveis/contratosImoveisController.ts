import * as admin from 'firebase-admin';
const firestore = admin.firestore();

import { ContratosImoveis, MessageTreatment } from '../../interfaces/exportInterfaces';
import { messageTreatmentBusiness } from '../../business/utils/messageTreatmentBusiness';

const objectContrato = (contrato:ContratosImoveis) => ({
    register: contrato.register,
    title: contrato.title,
    body: contrato.body,
    owner_contrato: contrato.owner_contrato,
    client_contrato: contrato.client_contrato,
    rent: contrato.rent,
    sell: contrato.sell,
    endereco_imovel: contrato.endereco_imovel,
    date_start: contrato.date_start,
    date_end: contrato.date_end
});

class ContratosImoveisController {

    getContratos = async () => {
        let contratos: any= [];
        await firestore.collection('contratos_imoveis').get()
            .then(query => {
                query.forEach(doc => {
                    contratos.push(doc.data());
            });
        });
        return contratos;
    }

    showContrato = async (register: string) : Promise<MessageTreatment> => {
    const setDoc = firestore.collection('contratos_imoveis').doc(register)
        return await setDoc.get()
                    .then(response => {
                        return messageTreatmentBusiness.successMsg('Contrato consultado', response.data());
                    })
                    .catch(error => {
                        return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
                    });
    }

    storeContrato = async (contrato: ContratosImoveis) : Promise<MessageTreatment> => {
        const contrato_obj = objectContrato(contrato);
        const setDoc = await firestore.collection('contratos_imoveis').doc().set(contrato_obj);
        return messageTreatmentBusiness.successMsg(`Contrato ${contrato_obj.title} cadastrado com sucesso!`, contrato_obj);
    }

    updateContrato = async (contrato: ContratosImoveis) : Promise<MessageTreatment> => {
        const contrato_obj = objectContrato(contrato);
        const register: string = contrato.register;
        const setDoc = await firestore.collection('contratos_imoveis').doc(register).set(contrato_obj, { merge: true });
        return messageTreatmentBusiness.successMsg(`Contrato ${contrato.title} atualizado com sucesso!`, contrato_obj);
  }

    deleteContrato = async (register: string) : Promise<MessageTreatment> => {
        return await firestore.collection('contratos_imoveis').doc(register).delete()
        .then(() => {
            return messageTreatmentBusiness.successMsg('Contrato deletado!');
        })
        .catch(error => {
            return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
        });
        
  }
}

export const contratosImoveisController = new ContratosImoveisController();