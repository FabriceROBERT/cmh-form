import React, {useState}from 'react'
import { motion } from 'framer-motion';
import { themeJson } from '../assets/config/theme';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import {json } from '../assets/config/json'

function Form() {
  const survey = new Model(json);
  survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
  return (
    <div>    
    <h1 className='mt-10 ml-10  text-3xl'>Proposer son logement</h1>

    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 3 }} className=' mx-auto my-20 shadow-lg rounded-3xl max-w-7xl p-20 bg-white '>
    <Survey model={survey} />
    </motion.div>
    </div>
  )
}

export default Form
