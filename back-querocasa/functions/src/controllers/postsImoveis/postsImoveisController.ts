import * as admin from 'firebase-admin';
const firestore = admin.firestore();

import { PostsImoveis, MessageTreatment } from '../../interfaces/exportInterfaces';
import { messageTreatmentBusiness } from '../../business/utils/messageTreatmentBusiness';

const objectPost = (post:PostsImoveis) => ({
    title: post.title,
    subtitle: post.subtitle,
    body: post.body,
    rent: post.rent,
    sell: post.sell,
    comments: post.comments,
    endereco_imovel: post.endereco_imovel,
    created_at: post.created_at,
    date_start: post.date_start,
    date_end: post.date_end
});

class PostsImoveisController {

    getPosts = async () => {
        let posts: any= [];
        await firestore.collection('posts_imoveis').get()
            .then(query => {
                query.forEach(doc => {
                    posts.push(doc.data());
            });
        });
        return posts;
    }

    showPost = async (id: string) : Promise<MessageTreatment> => {
        const setDoc = firestore.collection('posts_imoveis').doc(id)
            return await setDoc.get()
                        .then(response => {
                            return messageTreatmentBusiness.successMsg('Post consultado', response.data());
                        })
                        .catch(error => {
                            return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
                        });
    }

    storePost = async (post: PostsImoveis) : Promise<MessageTreatment> => {
        const post_obj = objectPost(post);
        let setDoc = await firestore.collection('posts_imoveis').doc().set(post_obj);
        return messageTreatmentBusiness.successMsg(`Post ${post_obj.title} cadastrado com sucesso!`, post_obj);
    }

    updatePost = async (post: PostsImoveis) : Promise<MessageTreatment> => {
        const post_obj = objectPost(post);
        const id: string = post.id;
        const setDoc = await firestore.collection('posts_imoveis').doc(id).set(post_obj, { merge: true });
        return messageTreatmentBusiness.successMsg(`Post ${post.title} atualizado com sucesso!`, post_obj);
    }

    deletePost = async (id: string) : Promise<MessageTreatment> => {
        return await firestore.collection('posts_imoveis').doc(id).delete()
        .then(() => {
            return messageTreatmentBusiness.successMsg('Post deletado!');
        })
        .catch(error => {
            return messageTreatmentBusiness.badRequest(`Erro: ${error}`);
        });
    }
}

export const postsImoveisController = new PostsImoveisController();