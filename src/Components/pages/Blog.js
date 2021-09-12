import { useEffect, useState } from "react";
import Footer from "../ChildrenComps/Footer";
import Partner from "../ChildrenComps/Partners";
import NavBar from "./../ChildrenComps/bar"
import Recipe from "./../ChildrenComps/Recipe";


function Blog() {
  const appId = "a1ef64c0";
  const appKey = "efc315219cd0a6367273ba8ee608843f";

  const [recipes, setRecipes] = useState(null);
 
  const [query] = useState(["Cooking"]);
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
      console.log(recipes);

  }, [query , recipes]);
  return (
    <div className="Blog">
    <NavBar/>
      <div className="header-box ">
        <div className="container">
          <div className="row">
            <div className="header col-md-8 text-center">
              <h6>WELCOME TO OUR GENEROUS</h6>
              <h1>It's All About Good Food & Taste</h1>
              <p>
                While eating at a restaurant is an enjoyable and convenient
                occasional and dinner daily ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-content ">
        <div className="container">
          <h3 className="blog-title text-center">Every Ways To Make <span>{query}</span> </h3>
          <div className="row">
      {recipes &&
        recipes.map((recipe) => (
          <div className="col-md-6 ">
          <Recipe className="food"
          title={recipe.recipe.label}
          key={recipe.recipe.calories}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
            
          </div>
        ))}
        
        </div>
        </div>
      </section>
      <Partner/>
      <Footer/>
    </div>
  );
}

export default Blog;
