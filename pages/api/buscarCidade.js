// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {cidade, idade} = req.body

  var listPostos = []

  if(cidade == "Duque de Caxias"){
    listPostos.push("Hospital Municipal Duque de Caxias - Av. Dr. Manoel Lucas - Periquitos, Duque de Caxias - RJ, 25025-330")
    listPostos.push("Hospital Infantil - R. da República, 115 - Centro, Duque de Caxias - RJ, 25011-500")
  }

  res.status(202).json({postos: listPostos})
}
