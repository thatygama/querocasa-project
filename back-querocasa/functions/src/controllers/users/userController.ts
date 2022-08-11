import * as admin from 'firebase-admin';
const firestore = admin.firestore();

import { User, MessageTreatment } from '../../interfaces/exportInterfaces';
import { messageTreatmentBusiness } from '../../business/utils/messageTreatmentBusiness';

class UserController {

    getUsers = async () => {
        let users: any= [];
        await firestore.collection('users').get()
            .then(query => {
                query.forEach(doc => {
                    users.push(doc.data());
            });
        });
        return users;
    }

    showUser = async (idUser: string) : Promise<MessageTreatment> => {
        const setDoc = firestore.collection('users').doc(idUser)
            return await setDoc.get()
                        .then(response => {
                            return messageTreatmentBusiness.successMsg('Usuário consultado', response.data());
                        })
                        .catch(error => {
                            return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
                        });
    }

    storeUser = async (user: User) : Promise<MessageTreatment> => {
          const setDoc = await firestore.collection('users').doc().set(user);
          return messageTreatmentBusiness.successMsg(`Usuário ${user.name} cadastrado com sucesso!`, setDoc);
    }

    updateUser = async (user: User) : Promise<MessageTreatment> => {
        const idUser: string = user.id;
        const setDoc = await firestore.collection('users').doc(idUser).set(user, { merge: true });
        return messageTreatmentBusiness.successMsg(`Usuário ${user.name} atualizado com sucesso!`, setDoc);
  }

    deleteUser = async (idUser: string) : Promise<MessageTreatment> => {
        return await firestore.collection('users').doc(idUser).delete()
        .then(() => {
            return messageTreatmentBusiness.successMsg('Usuário deletado!');
        })
        .catch(error => {
            return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
        });
        
  }
}

export const userController = new UserController();