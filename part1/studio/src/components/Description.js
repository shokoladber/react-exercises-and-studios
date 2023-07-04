import styles from './Description.module.css';
import React from 'react';

RecipeAuthor(){
    const authorLink="https://www.alisoneroman.com/recipes/spaghetti-carbonara";
    const authorPhoto="https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1636467664641-HWQF1U1WFZ1MPCEFSKND/1679+CB+06B+ALISON+ROMAN+32675_CBE_AlisonRoman_008_21.jpg";
    const authorNames="Alison Roman";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {}