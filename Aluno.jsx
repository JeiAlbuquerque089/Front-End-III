import React from 'react'

const Aluno = ({nome, email, curso, media}) => {
  return (
    <>
    <p>Nome: {nome} </p>
    <p>Email: {email} </p>
    <p>Curso: {curso} </p>
    <p>Status: {media >= 7 ? <span>aprovado</span> : <span>reprovado</span>}</p>
    <p>----------------------</p>
</>
  )
}

export default Aluno