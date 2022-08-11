import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import FormAddPost from "./formulario_add_post.tsx";
import CardImovel from "../../components/card_imovel";
import './index.css';
import api from "../../../config/axios";

interface PostsImoveis {
  id: string;
  title: string;
  subtitle: string | null;
  body: string;
  rent: Boolean;
  sell: Boolean;
  comments: string[] | null;
  endereco_imovel: Object;
  created_at: Date;
  date_start: string | null;
  date_end: string | null;
};

const VerImoveis: React.FunctionComponent = () => {
  
  const [show, setShow] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [imoveis, setImoveis] = useState<PostsImoveis[]>([]);
  const [imovel, setImovel] = useState<PostsImoveis|any|{}>({});
  const presenterURL = '/posts_imoveis';

  const handleClose = () => {
    setShow(!show);
  };
  const handleShow = () => {
    setShow(!show);
  };

const getImoveis = async () => {
    setLoading(true);
    await api.get(presenterURL)
    .then(response => {
      if (response)
        setImoveis(response.data);
    }).catch(e => {
    }).finally(() => {
      setLoading(false);
    })
  };

  const postImovel = async () => {
    setLoading(true);
    (console.log(imovel))
    await api.post(presenterURL, imovel)
    .then(response => {
      console.log(response)
      if (response) {
        imoveis.push(response.data.response);
      }
    }).catch(e => {
    }).finally(() => {
      setLoading(false);
    })
  };

  useEffect(() => {
    console.log(imovel.title)
    if (imovel.title)
      postImovel();
  }, [imovel]);

  useEffect(() => {
    getImoveis();
  }, []);

    return (
      <div className="main_dashboard ver_imoveis">
        <h2 style={{ color: 'rgb(110, 72, 0)'}}>Imóveis disponíveis!</h2>

      <Button variant="warning" onClick={handleShow}
      className='mt-4'>Adicionar publicação de imóvel</Button>
      
      { loading ?
        <div>
          <Spinner className='mt-4' animation="border" role="status" />
        </div>
        : null
      }

      { imoveis.length ? 

      <div className='card_imoveis'>
        { imoveis.map((imovel, id) => {
          return <CardImovel  key={id} 
                title={imovel.title}
                body={imovel.body} />
          })
         }
      </div>
        : null}
      
      
      { show ?
        <FormAddPost setImovel={setImovel} handleClose={handleClose}/>
      : null }
      </div>
    );
  }
  
export default VerImoveis;
  