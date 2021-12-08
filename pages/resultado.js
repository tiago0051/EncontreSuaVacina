import axios from 'axios';
import { useEffect, useState } from 'react';
import Router from 'next/router'

import styles from '../styles/Home.module.css';

export default function Resultado(props) {

    const [Cidade, setCidade] = useState('');
    const [Idade , setIdade] = useState(0);
    const [Postos, setPostos] = useState([])

    useEffect(() => {
        const {cidade, idade, postos} = props;
        setCidade(cidade);
        setIdade(idade);
        setPostos(postos)
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.resultado}>
                <div>                   
                    <h1 className={styles.title}>Resultado para a cidade de {Cidade} para {Idade} anos.</h1>
                    <button onClick={() => Router.push("/")} className={styles.botões}>Pesquisar Novamente</button>
                </div>
                <div>
                    {
                        Postos.map(posto => (
                            <span key={posto}>{posto}</span>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx){
    const {cidade, idade} = ctx.query

    const data = await axios.post("http://localhost:3000/api/buscarCidade", {cidade, idade})

    const postos = data.data.postos
    return {
        props: {
            cidade,
            idade,
            postos
        }
    }
}