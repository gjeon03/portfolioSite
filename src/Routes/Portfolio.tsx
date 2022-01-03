import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import { useEffect, useRef, useState } from "react";

interface IPropsRef {
	aboutMeRef: React.RefObject<HTMLDivElement>,
	skillsRef: React.RefObject<HTMLDivElement>,
	projectsRef: React.RefObject<HTMLDivElement>,
}

function Portfolio() {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const [refs, setRefs] = useState<IPropsRef>();
	useEffect(() => {
		setRefs({
			aboutMeRef: aboutMeRef,
			skillsRef: skillsRef,
			projectsRef: projectsRef,
		})
	}, [aboutMeRef, skillsRef, projectsRef]);
	return (
		<>
			<Header {...refs} />
			<div ref={aboutMeRef}>
				<AboutMe />
			</div>
			<div ref={skillsRef}>
				<Skills />
			</div>
			<div ref={projectsRef}>
				<Projects />
			</div>
		</>
	);
}

export default Portfolio;