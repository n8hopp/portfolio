import React, { useState } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from './layout'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/styles';
import { github, pineapple, pineappleHover } from '../assets';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import SanImage from './sanimage';
import '../styles/test.css';

const ProjectCard = ({
	id,
	name,
	description,
	minidescription,
	slug,
	picture,
	repo,
	demo,
	index,
	active,
	handleClick
}) => {
	return (
		<motion.div
		variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
		className={`relative ${
		  active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
		} flex items-center justify-center min-w-[170px] 
		h-[420px] cursor-pointer card-shadow`}
		onClick={() => handleClick(id)}>
		<div
		  className="absolute top-0 left-0 z-10 bg-jetLight 
		h-full w-full opacity-[0.5] rounded-[24px]"></div>
  
  		{picture && <SanImage {...picture} alt="Test" className={"absolute w-full h-full object-cover rounded-[24px]"}/>}
  
		{active !== id ? (
		  <div className="flex items-center justify-center pt-12">
			<h3
			  className="font-extrabold font-fira lg:origin-shift flex items-center
			  		lg:origin-[0,0] w-[300px] h-[55px] sm:text-[27px] xxs:justify-content text-[18px] 
					text-timberWolf tracking-[1px] absolute z-0 lg:bottom-[7rem]
		  			leading-none z-20 lg:rotate-[-90deg] lg:transform-left-[5%] ">
			  {name}
			</h3>
			 
		  </div>
		) : (
		  <>
			<div
			  className="absolute bottom-0 p-8 justify-start w-full 
			  flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
			  {repo && <div className="absolute inset-0 flex justify-end m-3">
				<div
				  onClick={() => window.open(repo, '_blank')}
				  className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
					flex justify-center items-center cursor-pointer
					sm:opacity-[0.9] opacity-[0.8]">
				  <img
					src={github}
					alt="source code"
					className="w-4/5 h-4/5 object-contain"
				  />
				</div>
			  </div>}
  
			  <h2
				className="font-bold sm:text-[3hw] lg:text-[30px] 
				text-timberWolf font-fira sm:mt-0 -mt-[1rem]">
				{name}
			  </h2>
			  <p
				className="text-silver sm:text-[14px] text-[12px] 
				max-w-3xl sm:leading-[24px] leading-[18px]
				font-fira tracking-[1px]">
				{minidescription}
			  </p>
			  <button
				className="live-demo flex justify-center
				sm:text-[16px] text-[14px] text-timberWolf 
				font-bold items-center py-5 pl-2 pr-3 
				whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
				w-[125px] h-[46px] rounded-[10px] glassmorphism 
				sm:mt-[22px] mt-[16px] hover:bg-battleGray 
				hover:text-eerieBlack text-center transition duration-[0.2s] 
				ease-in-out"
				onClick={() => window.open(`/project/${slug.current}`, '_self')}>
				More Info
			  </button>
			</div>
		  </>
		)}
	  </motion.div>
	);
};

const Projects = (props) => {
	const [active, setActive] = useState('project-2');
  
	return (
	  <div className="-mt-[6rem]">
		<motion.div variants={textVariant()}>
		  <h2 className={`${styles.sectionHeadText}`}>projects</h2>
		</motion.div>
  
		<div className="w-full flex">
		  <motion.p
			variants={fadeIn('', '', 0.1, 1)}
			className="mt-4 text-taupe font-fira text-[18px] max-w-3xl leading-[30px]">
			Some of my various projects. 
			These projects effectively demonstrate my comfortability and experience in full-stack development and leadership.
		  </motion.p>
		</div>
  
		<motion.div
		  variants={staggerContainer}
		  initial="hidden"
		  whileInView="show"
		  viewport={{ once: false, amount: 0.25 }}
		  className={`${styles.innerWidth} mx-auto flex flex-col`}>
		  <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] xxs:min-height-[100vh] gap-5">
			{props.projects.map((project, index) => (
			  <ProjectCard
				key={project.id}
				index={index}
				{...project}
				active={active}
				handleClick={setActive}
			  />
			))}
		  </div>
		</motion.div>
	  </div>
	);
  };

export default SectionWrapper(Projects, 'projects');
//export default Projects;