import Head from 'next/head'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Localize sua Vacina</title>
        <meta name="description" content="Localize o ponto de distribuição mais proximo de você!" />
      </Head>

      <form>
        <h2>Descubra o local ideal para tomar sua vacina!</h2>
        <input type="text" placeholder="Digite a localização"/>
        <input type="number" placeholder="Idade"/>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  )
}

export const getStaticProps = async (ctx) => {

  return{
    props: {
      teste: "a",
      cidades: ["Duque de Caxias", "Cachoeiras de Macacu", "Rio de Janeiro"]
    }
  }
}
