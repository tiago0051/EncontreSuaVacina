import Head from 'next/head'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Localize sua Vacina</title>
        <meta name="description" content="Localize o ponto de distribuição mais proximo de você!" />
      </Head>
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
