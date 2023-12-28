import React from 'react';
import CMH from '../assets/images/cmh.png'
import { useForm } from 'react-hook-form';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Footer = () => {
    
    const { register, handleSubmit } = useForm();
    const currentDate = new Date().getFullYear()
    const [text] = useTypewriter({
    
        words: ["Prêt à estimer vos revenus locatifs ?"],
        loop: true,
        delaySpeed: 4000,
        typeSpeed: 30,
        deleteSpeed: 30,
        loop:1,
        
    })

  const onSubmit = (formData) => {
    window.location.href = `mailto:commemyhome@gmail.com?subject=${formData.objet}&body=${formData.commentaire}`;
  };

  return (
    <div className='w-screen flex relative flex-col bg-[#8c3e82] text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center'>
        <div className='flex flex-col space-y-3 items-center'>
        <img src={CMH} height={150} width={150} />



        <h1 className='text-5xl text-white'>{text}</h1>
        <h2 className='text-3xl text-[#eecdea]'>N'hesitez pas à nous contacter</h2></div>
      <div className='flex flex-col pb-10 space-y-2 sm:space-y-10'>
        <h4 className='mx-auto sm:text-3xl text-xs font-semibold text-center'>
          <span className='text-[#F7AB0A]/60'></span>
        </h4>

        <div className='sm:space-y-5 space-y-2'>

        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='overflow-visible grid grid-cols-1 md:flex md:flex-col space-y-2 md:w-fit w-96 mx-auto'>
          <div className='md:flex md:space-x-2 md:space-y-0 space-y-2 grid grid-cols-1 md:w-fit'>
            <input {...register('nom')} placeholder='Nom' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('objet')} placeholder="Objet" className='contactInput' type="text" />
          <textarea {...register('commentaire')} placeholder='Commentaire' className='contactInput'></textarea>
          <button type='submit' className='bg-[#de9bd5] py-5 px-10 rounded-md text-white font-bold text-lg'>Envoyer </button>
        </form>
        <div className='text-[#eecdea] '>
            {`Copyright © ${currentDate} | Tous droits réservés à`} {" "}   <a
              href="https://commemyhome.fr/"
              target="_blank"
              className="underline"
            >
              {`CMH`}
            </a>
            {` - Conditions`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
