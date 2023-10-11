import React, { useState } from "react";
import "./styles.css";

function Cadastro() {
  const [nomecurso, setNomeCurso] = useState("");
  const [descricaocurso, setDescricaoCurso] = useState("");
  const [linkcurso, setLinkCurso] = useState("");
  const [endereco, setEndereco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [duracao, setDuracao] = useState("");
  const [email, setEmail] = useState("");
  const [valor, setValor] = useState("");
  const [vagas, setVagas] = useState("");
  return (
    <div className="container">
      <div className="form-image"></div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Matricula</a>
              </button>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="noemcurso">Nome do curso</label>
            <input
              placeholder="Digite o nome do curso"
              required
              id="curso"
              type="curso"
              name="curso"
              value={nomecurso}
              onChange={(e) => setNomeCurso(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="descricaocurso">Descrição do Curso</label>
            <input
              placeholder="Digite a descrição do curso"
              required
              id="descricao"
              type="text"
              name="descricao"
              value={descricaocurso}
              onChange={(e) => setDescricaoCurso(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="linkcurso">Link</label>
            <input
              placeholder="Digite o link do curso"
              required
              id="linkdocurso"
              type="link"
              name="linkdocurso"
              value={linkcurso}
              onChange={(e) => setLinkCurso(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="endereco">Endereço</label>
            <input
              placeholder="Digite o endereço"
              required
              id="endereco"
              type="string"
              name="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="categoria">Categoria</label>
            <input
              placeholder="Digite a categoria"
              required
              id="categoria"
              type="string"
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="duracao">Duração</label>
            <input
              placeholder="Digite a duração curso"
              required
              id="duracao"
              type="number"
              name="duracao"
              value={duracao}
              onChange={(e) => setDuracao(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Digite o email"
              required
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="valor">Valor</label>
            <input
              placeholder="Digite o valor do curso"
              required
              id="valor"
              type="string"
              name="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="vagas">Vagas</label>
            <input
              placeholder="Quantidade de vagas"
              required
              id="vagas"
              type="number"
              name="vagas"
              value={vagas}
              onChange={(e) => setVagas(e.target.value)}
            />
          </div>

          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
