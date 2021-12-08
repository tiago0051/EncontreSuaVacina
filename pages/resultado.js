import axios from 'axios';
import Router from 'next/router'
import absoluteUrl from "next-absolute-url"

import styles from '../styles/Home.module.css';

export default function Resultado(props) {
    const {cidade, idade, postos} = props;

    return (
        <div className={styles.container}>
            <main className={styles.resultado}>
                <div>                   
                    <h1 className={styles.title}>Resultado para a cidade de {cidade} para {idade} anos.</h1>
                    <button onClick={() => Router.push("/")} className={styles.botões}>Pesquisar Novamente</button>
                </div>
                <div>
                    {
                        postos.map(posto => (
                            <span key={posto}>{posto}</span>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx){
    const { origin } = absoluteUrl(ctx.req, "localhost:3000");
    const {cidade, idade} = ctx.query

    const data = await axios.post(origin + "/api/buscarCidade", {cidade, idade})

    const postos = data.data.postos

    return {
        props: {
            cidade,
            idade,
            postos
        }
    }
}