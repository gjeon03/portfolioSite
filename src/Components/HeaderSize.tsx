import styled from "styled-components";

export const Size = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	div {
		margin-top: -1px;
		height: 50px;
	}
`;

interface IProps {
	color: string;
}

function HeaderSize({ color }: IProps) {
	return (
		<Size >
			<div style={{ backgroundColor: color }} />
			<div style={{ backgroundColor: color }} />
		</Size>
	);
}

export default HeaderSize;