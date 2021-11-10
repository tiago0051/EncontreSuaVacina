import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  const [cidade, setCidade] = useState('')
  const [idade, setIdade] = useState('')

  function submit(event) {
    event.preventDefault()

    router.push({
      pathname: '/resultado',
      query: { cidade: cidade, idade: idade }
    })
  }

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Descubra o local ideal para tomar sua vacina!</h1>
        <form className={styles.formulario} onSubmit={submit}>
          <select className={styles.select} value={cidade} onChange={(event) => setCidade(event.target.value)}>
            <option value="">Selecione a cidade</option>
            <option value="Duque de Caxias">Duque de Caxias</option>
          </select>
          <div>
            <input type="number" placeholder= "Idade" onChange={(event) => setIdade(event.target.value)}/>
            <button type="submit" className={styles.butões}>Pesquisar</button>
          </div>
        </form>
      </main>
    </div>
  )
}
