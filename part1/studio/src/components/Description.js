import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    const authorLink="https://www.alisoneroman.com/recipes/spaghetti-carbonara";
    const authorPhoto="https://cdn.shopify.com/s/files/1/0818/5369/files/Snowe_AR_MidnightMeal22984_2048x2048.jpg?v=1515435915"
    const authorName="Alison Roman";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Alison Roman eating pasta" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>alisoneroman.com</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render(){
        return(
            <div>
            <div>
                <h1>Spaghetti Carbonara For One</h1>
                <p>I don’t plan on offering this disclaimer every time I write a recipe (although sometimes I think I should), but I am in no way saying this is the definitive way to make spaghetti carbonara. It might not even be “the right way?” But, this is the way I make it. It makes sense to me, it felt right, and wow, have I mentioned that creamy, silky sauce? I’m sure I would be absolutely SCHOOLED by somebody’s Italian aunt (or worse, mansplained by somebody’s boyfriend who “spent a summer in Italy and just absolutely fell in love with the food”) for doing it this way, but all I can say is that it works and, well, I love it. 
The amount of sauce produced here could absolutely go the distance for double the amount of pasta, useful to know if you find yourself in bed with someone needing some LNP (late night pasta).</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    }
}

export default RecipeDescription;