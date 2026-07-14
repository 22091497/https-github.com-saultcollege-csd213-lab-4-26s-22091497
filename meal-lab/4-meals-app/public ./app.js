document.addEventListener("DOMContentLoaded", () => {
  const selectMenu = document.getElementById("ingredient-dropdown");
  const displayArea = document.getElementById("meals-container");

  
  fetch("https://themealdb.com")
    .then(res => res.json())
    .then(data => {
      const items = data.meals;
      items.sort((a, b) => a.strIngredient.localeCompare(b.strIngredient));
      
      items.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.strIngredient;
        opt.textContent = item.strIngredient;
        selectMenu.appendChild(opt);
      });
    });

 
  selectMenu.addEventListener("change", (e) => {
    const component = e.target.value;
    if (!component) return;

   
    displayArea.innerHTML = "";

    fetch(`https://themealdb.com{encodeURIComponent(component)}`)
      .then(res => res.json())
      .then(data => {
        if (!data.meals) {
          displayArea.innerHTML = "<p>No recipes match this selection.</p>";
          return;
        }

      
        data.meals.forEach(meal => {
          const block = document.createElement("div");
          block.className = "recipe-card";
          
          
          block.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
          `;

    
          block.addEventListener("click", () => {
            showExtendedRecipe(meal.idMeal, block);
          });

          displayArea.appendChild(block);
        });
      });
  });

 
  async function showExtendedRecipe(id, card) {
    try {
      const res = await fetch(`https://themealdb.com{id}`);
      const payload = await res.json();
      const current = payload.meals[0];

      
      let cleanComponents = [];
      let ingredientListHTML = "<ul>";
      for (let i = 1; i <= 20; i++) {
        const name = current[`strIngredient${i}`];
        const measure = current[`strMeasure${i}`];
        if (name && name.trim() !== "") {
          cleanComponents.push(`${measure ? measure : ""} ${name}`);
          ingredientListHTML += `<li><strong>${name}:</strong> ${measure ? measure : ""}</li>`;
        }
      }
      ingredientListHTML += "</ul>";

      
      card.innerHTML = `
        <h2>${current.strMeal}</h2>
        <img src="${current.strMealThumb}" alt="${current.strMeal}">
        <p><strong>Category:</strong> ${current.strCategory}</p>
        <h4>Ingredients Checklist:</h4>
        ${ingredientListHTML}
        <p><strong>Method:</strong> ${current.strInstructions}</p>
        <div class="ai-summary" style="background:#eee; padding:10px; margin-top:10px;">
          <em>Asking assistant for dynamic text overview...</em>
        </div>
      `;

      
      const aiPromptText = `Write a short, concise description (max 2 sentences) for the recipe "${current.strMeal}". Category: ${current.strCategory}. Ingredients: ${cleanComponents.join(", ")}.`;

      
      const internalRes = await fetch("/geminiproxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: aiPromptText })
      });

      const proxyData = await internalRes.json();
      const descriptionText = proxyData.candidates[0].content.parts[0].text;
      
      const targetDiv = card.querySelector(".ai-summary");
      if (targetDiv) {
        targetDiv.innerHTML = `<p><strong>Overview summary:</strong> ${descriptionText}</p>`;
      }
    } catch (err) {
      console.log("Error extracting complete documentation logs:", err);
    }
  }
});