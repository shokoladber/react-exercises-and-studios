import styles from './Ingredients.module.css'

function RecipeIngredients(){

    const ingredients = [
                            "A personal palmful of spaghetti (about 3 ounces, but who is weighing spaghetti)",
                            "A slice of guanciale or pancetta (if you want to use bacon, sure, you can), about ¼” thick, cut into ¼” pieces (about 2 oz/55g)",
                            "1 large egg",
                            "About ½ cup (1 oz/30g) finely grated parmesan and/or pecorino cheese, plus more for grating on top with reckless abandon",
                            "1 garlic clove, finely grated (optional, but it is my preference)",
                            "1 tablespoon/13g olive oil",
                            "Kosher salt and freshly ground black pepper to taste"
                        ];

    return(
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
        </ul>
     </div>
    )
}

export default RecipeIngredients;