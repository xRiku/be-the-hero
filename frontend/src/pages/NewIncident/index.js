import React from 'react';

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
  return (
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreve o caso detalhadamente para encontrar um herói para resolveri o problema.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form>  
                <input placeholder="Título do caso"/>
                <textarea placeholder="Descrição"/> 
                <input placeholder="Valor em reais"/> 
                <div className="buttons">
                  <button className="button" type="submit">Cancelar</button>
                  <button className="button" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
  )
}