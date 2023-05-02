import styled from 'styled-components';

export default function Types({ types })
{

	return (
		<TypesStyled>
			{ types.map((type, index) => <TypeStyled className={type.type.name} key={index}>{type.type.name}</TypeStyled>) }
		</TypesStyled>
	)
}

let TypesStyled = styled.div`
	text-align: center;
	background-color: rgb(210, 208, 208);
	padding: 5px;
`

let TypeStyled = styled.div`
	display: inline-block;
	padding: 5px 10px;
	border-radius: 7px;
	margin: 5px;
	text-transform: capitalize;
	width: 100px;

	&.fire {
		background-color: #fd7d24;
		color: white;
	}

	&.grass {
		background-color: #9bcc50;
		color: #212121;
	}

	&.poison {
		background-color: #b97fc9;
		color: white;
	}

	&.water {
		background-color: #4592c4;
		color: white;
	}

	&.rock {
		background-color: #a38c21;
		color: white;
	}
	
	&.normal {
		background-color: #a4acaf;
		color: #212121;
	}
	
	&.electric {
		background-color: #eed535;
		color: #212121;
	}

	&.flying {
		background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
		color: #212121;
	}

	&.dragon {
		background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
		color: white;
	}

	&.ground {
		background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
		color: #212121;
	}

	&.psychic {
		background-color: #f366b9;
		color: white;
	}

	&.bug {
		background-color: #729f3f;
		color: white;
	}

	&.fairy {
		background-color: #fdb9e9;
		color: #212121;
	}

	&.fighting {
		background-color: #d56723;
		color: white;
	}

	&.steel {
		background-color: #9eb7b8;
		color: #212121;
	}

	&.ice {
		background-color: #51c4e7;
		color: #212121;
	}

	&.ghost {
		background-color: #7b62a3;
		color: white;
	}
`