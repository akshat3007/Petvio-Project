import React from 'react'
import { Vet, PetCare, Groom } from '../assets';
import styles from '../style';

const Services = () => (
  <section id="services" className={`flex xl:flex-row flex-col ${styles.paddingY} mb-64`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark ">
      We provide <br className="sm:block hidden"/>
      <span className="text-secondary"> Quality Services </span> <br className="md:hidden"/>
      for your beloved pets..
      🐱
    </h1>
  </div>
    <blockquote className={`${styles.paragraph} max-w-[470px] mt-5 pb-[65px] text-dark`}>
    "We provide quality servies like finding the best veterinarian or veterinary clinic near you with just a few clicks, We list reviews from pet-parents We have plenty of articles on how to train your cat or dog, as well as the best dog toys in the market, Learn more about caring for your pet with helpful tips and articles on topics like food, health, training, and grooming, You'll also be getting access to numerous NGOs for reporting animal related issues and other contributions. "
    </blockquote>
  </div>

<div className={`flex md:flex-row flex-col py-11`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="text-dark text-[24px] mt-3 relative py-9 leading-[69px] flex md:flex-row flex-col justify-between items-center w-full">
    <div className='md:hidden'>
      Tap on the images to know more...
    </div>
    <div className={`flip-card`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={Vet} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href="src/vets/veterinary.html" >
          Veterinary
        </a>
        </div>
      </div>
    </div>
    <div className={`flip-card md:mt-0 mt-60`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={PetCare} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href="src/ngo/ngo.html">
        🐾Rescue Center
        </a>
        </div>
      </div>
    </div>
    <div className={`flip-card md:mt-0 mt-60`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={Groom} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href="src/articles/articles.html">
        🐾Pet Articles
        </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
    </section>
  );

export default Services