import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../styles/Cadastro.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const schema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório").max(40, "Máximo de 40 caracteres"),
    sinopse: yup.string().required("A descrição é obrigatória").max(1000, "Máximo de 1000 caracteres"),
    preco: yup.string().required("O preço é obrigatório").max(7, "Máximo de 7 caracteres"),
    img: yup.string().required("A imagem é obrigatória").max(100, "Máximo de 100 caracteres")
})

    

const Cadastro = () => {
    const [formData, setFormData] = useState({ nome: '', sinopse: '', preco: '', img:'' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
            
        });console.log(formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        schema.validate(formData, { abortEarly: false })
            .then(() => {
                axios.post('https://teste-igjg.onrender.com/livros', formData)
                .then(response => {
                    console.log(response);
                    setIsSubmitting(false);
                })
                .catch(error => {
                    console.log(error);
                    setIsSubmitting(false);
                });
            })
            .catch(error => {
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
                setIsSubmitting(false);
            });
    }
    return (
        <main>
        <form className='formularioCadastro' onSubmit={handleSubmit}>
        <h1> Cadastro de Livros</h1>
              <div>
                <label>Imagem:</label>
                <input name="img" type="text" onChange={handleChange} value={formData.img}/>
                {errors.img &&<p>{errors.img}</p>}
              </div>
            <div>
                <label>Nome:</label>
                <input className='camposCadastro' type="text" name="nome" onChange={handleChange} value={formData.nome} />
                {errors.nome && <p>{errors.nome}</p>}
            </div>

            <div>
                <label>Sinopse:</label>
                <input name="sinopse" onChange={handleChange} value={formData.sinopse} />
                {errors.sinopse && <p>{errors.sinopse}</p>}
            </div>

            <div>
                <label>Preco:</label>
                <input type="number" name="preco" onChange={handleChange} value={formData.preco} />
                {errors.preco && <p>{errors.preco}</p>}
            </div>
            <button className='botaoCadastro' disabled={isSubmitting}>Cadastrar</button>
        </form>
        </main>
    );
}

export default Cadastro;