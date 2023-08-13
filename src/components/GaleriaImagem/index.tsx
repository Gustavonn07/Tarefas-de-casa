import './style.css';

type PropsGaleriaImagem = {
    imgsm?: boolean,
    imgmdv?: boolean,
    imgmdh?: boolean,
    imglg?: boolean,
    posicao: string,
    imagem: string,
    desc: string
}

const GaleriaImagem = ({imgsm, imgmdv, imgmdh, imglg, posicao, imagem, desc}: PropsGaleriaImagem) => {

    return (
        <>
            {
                imgsm && (
                    <img className={posicao} src={imagem} alt={desc} />
                )
            }
            
            {
                imgmdv && (
                    <img className={posicao} src={imagem} alt={desc} />
                )
            }

            {
              imgmdh && (
                    <img className={posicao} src={imagem} alt={desc} />
                )
            }

            {
                imglg && (
                    <img className={posicao} src={imagem} alt={desc} />
                )
            }
        </>
    )
}

export default GaleriaImagem;
