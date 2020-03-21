import React from "react";
import Article from "../components/Article";

const articles = [
	{
		id: 1,
		title: "Czym jest teoria strun",
		author: "Jan Nowak",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet non enim soluta voluptates omnis molestiae quis sunt temporibus deleniti? Delectus assumenda eos ad mollitia temporibus atque blanditiis enim amet."
	},
	{
		id: 2,
		title: "Czym jest paradoks Fermiego?",
		author: "Jan Nowak",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet non enim soluta voluptates omnis molestiae quis sunt temporibus deleniti? Delectus assumenda eos ad mollitia temporibus atque blanditiis enim amet."
	},
	{
		id: 3,
		title: "Ciemna materia i ciemna energia?",
		author: "Jan Nowak",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet non enim soluta voluptates omnis molestiae quis sunt temporibus deleniti? Delectus assumenda eos ad mollitia temporibus atque blanditiis enim amet."
	}
];
const HomePage = () => {
	const artList = articles.map(article => (
		<Article key={article.id} {...article} />
	));

	return <div className="home">{artList}</div>;
};

export default HomePage;
