import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMatch } from "react-router";
import BicSizeImage from "../Components/BicSizeImage";
import HeaderSize from "../Components/HeaderSize";
import Archiving from "../Components/Archiving";

interface IPropsRef {
	aboutMeRef?: React.RefObject<HTMLDivElement>,
	archivingRef?: React.RefObject<HTMLDivElement>,
	skillsRef?: React.RefObject<HTMLDivElement>,
	projectsRef?: React.RefObject<HTMLDivElement>,
}

function Portfolio() {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const archivingRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const [refs, setRefs] = useState<IPropsRef>();
	useEffect(() => {
		setRefs({
			aboutMeRef: aboutMeRef,
			archivingRef: archivingRef,
			skillsRef: skillsRef,
			projectsRef: projectsRef,
		})
	}, [aboutMeRef, archivingRef, skillsRef, projectsRef]);
	const bicImageMatch = useMatch("/image");
	return (
		<>
			<Header {...refs} />
			<div ref={aboutMeRef}>
				<AboutMe />
			</div>
			<div ref={archivingRef}>
				<HeaderSize {...{ color: "#eacebe" }} />
				<Archiving />
			</div>
			<div ref={skillsRef}>
				<HeaderSize {...{ color: "white" }} />
				<Skills />
			</div>
			<div ref={projectsRef}>
				<HeaderSize {...{ color: "#ff9651" }} />
				<Projects />
			</div>
			{bicImageMatch ? (
				<BicSizeImage />
			) : null}
		</>
	);
}

export default Portfolio;