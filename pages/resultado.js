import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

import styles from '../styles/Home.module.css';

export default function () {
    const router = useRouter();

    const [Cidade, setCidade] = useState("");
    const [Idade , setIdade] = useState(0);

    useEffect(() => {
        const {cidade, idade} = router.query;
        setCidade(cidade);
        setIdade(idade);
    }, [router.query])

    return (
        <div className={styles.container}>
            <main className={styles.resultado}>
                <div>                   
                    <h1 className={styles.title}>Resultado para a cidade de {Cidade} para {Idade} anos.</h1>
                    <button onClick={() => router.push("/")} className={styles.butões}>Pesquisar Novamente</button>
                </div>
                <div>
                    <span>Posto Duque: Rua Major Thomas Gonçalves, nº 5, Centro, Duque de Caxias, RJ</span>
                </div>
            </main>
        </div>
    );
}