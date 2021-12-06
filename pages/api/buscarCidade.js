// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {cidade, idade} = req.body

  var listPostos = []

  switch (cidade) {
    case 'Duque de Caxias':
      listPostos.push("Hospital Municipal Duque de Caxias - Av. Dr. Manoel Lucas - Periquitos, Duque de Caxias - RJ, 25025-330")
      listPostos.push("Hospital Infantil - R. da República, 115 - Centro, Duque de Caxias - RJ, 25011-500")
      break;
    case 'São João de Meriti':
      listPostos.push("Praça dos Três Poderes - Av. Presidente Lincoln, s/n - Vilar dos Teles, São João de Meriti - RJ, 25555-652")
      listPostos.push("Posto de Saúde do Araruama - R. Dionísio Rocha, s/n - Parque Novo Rio, São João de Meriti - RJ, 25585-230 ")
      listPostos.push("Centro de Saúde Doutor Aníbal Viriato de Azevedo - R. Pastor Joaquim Rosa, 26 - Jardim Meriti, São João de Meriti - RJ, 25555-681")
     break;
    case 'Nova Iguaçu':
      listPostos.push("Top ")
  }


  res.status(202).json({postos: listPostos})
}
