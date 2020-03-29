import React from 'react';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}