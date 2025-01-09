import React from "react"
import IngredientList from "./IngredientList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai.js"

export default function Main() {

    const [ingredients, setUserIngredient] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current != null) {
            recipeSection.current?.scrollIntoView({behavior: 'smooth', block: 'start'})}
    },[recipe])
  

    // function getRecipe (myingredients){
    //     setClaudeResponse(prevEntry => prevEntry ? prevEntry = getRecipeFromChefClaude(myingredients) : "An Error Occured")
    // }

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(prevRecipe => prevRecipe = recipeMarkdown)
        // console.log(recipeMarkdown)
    }


    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setUserIngredient(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label ="Add ingredient"
                    name="ingredient"
                />
                <button> Add Ingredient</button>
            </form>

            {ingredients.length > 0 ? <IngredientList
                ingredients = {ingredients}
                getRecipe = {getRecipe}
                ref={recipeSection}
            /> : null}

            {recipe ? <ClaudeRecipe 
                recipe = {recipe}

            /> :null}
           
            
        </main>
        
    )
}
