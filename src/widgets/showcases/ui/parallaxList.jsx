import React from 'react';
import Slider from 'react-slick';
import { ShowcaseCard } from './showcaseCard';

export const showcases = [
  {
    title: 'Simple Redux',
    img: '/redux.png',
    summary: 'Reproducing a simple Redux state-manager on pure JavaScript using design patterns',
    url: '',
    github: 'https://github.com/bohdan-ly-v/simple-redux',
  },
  {
    title: 'Realty Rift',
    img: '/rent.png',
    summary: 'Coolest CRM for realtors to manage their realty in one place.',
    url: 'https://rent-apart.vercel.app/dashboard',
    github: 'https://github.com/bohdan-ly-v/realty-rift',
  },
  {
    title: 'Career Crafter',
    img: '/career.png',
    summary:
      'Fully responsive and intuitive collaborative platform for developers, recruiters and investors!',
    url: 'https://career-crafter.vercel.app/home',
    github: 'https://github.com/bohdan-ly-v/career-crafter',
  },
];

export const ParallaxList = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {showcases.map((s, idx) => (
        <ShowcaseCard key={idx} {...s} />
      ))}
    </Slider>
  );
};
