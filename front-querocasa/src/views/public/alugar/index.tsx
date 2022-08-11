import './index.css';

const Alugar: React.FunctionComponent = () => {
    return (
      <div className="main alugar">
        <h2 style={{ color: 'rgb(110, 72, 0)'}}>Alugar imóvel</h2>

        <div className='alugar_area alugar_area2'>
          <div className='alugar_area alugar_area2_box2'>
            <div className='alugar_area2_box2_box1'>
              <h6>Why do we use it?</h6>
              'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
            <div className='alugar_area alugar_area2_box2_box2'>
              <h6 className='mt-4'>Why do we use it?</h6>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).            
            </div>
            <div className='alugar_area2_box1_box1'>
              <h6>What is Lorem Ipsum?</h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Alugar;
  