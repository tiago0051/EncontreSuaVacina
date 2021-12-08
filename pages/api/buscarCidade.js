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
      listPostos.push("Centro de SaúdeVasco Barcelos - R. Cel. Bernardino de Melo, 1895 - Centro, Nova Iguaçu - RJ, 26262-070")
      listPostos.push("Unidade de Saúde da Família Vila Tânia - R. Shirley Tinoco , s/n, Ouro Verde, Nova Iguaçu - RJ, 26262450")
      listPostos.push("Unidade Básica de Saúde Alberto Sobral - R. Orlinda Wilman, 115 - Moquetá, Nova Iguaçu - RJ, 26215-150")
      listPostos.push("Unidade de Saúde da Família Padre Manuel Monteiro - R. Benjamim Chambarelli, 239 - Caonze, Nova iguaçu - RJ, 26250-210 ")
      break;
    case 'Nilopolis':
      listPostos.push("Centro de Eventos - Av. Carmela Dutra, s/n - Frigorífico, Nilópolis - RJ, 26525-001")
      listPostos.push("Posto de Saúde Novo Horizonte - R. Dr. Mario Valadares, s/n - Novo Horizonte, Nilópolis - RJ, 26535-338")
      listPostos.push("Posto de Saúde Doutor Dorvil Lacerda - R. José Couto Guimarães, 1299 - Paiol de Pólvora, Nilópolis - RJ, 26545-014")
      break;
  }
  


  res.status(202).json({postos: listPostos})
}
