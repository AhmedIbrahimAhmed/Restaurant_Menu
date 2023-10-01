// header secion start 
let header = document.createElement("header");
let contnerForHeader = document.createElement("div");
contnerForHeader.className ="contner-for-header"
header.appendChild(contnerForHeader)

let logo = document.createElement("div");
logo.className="logo"
let img = document.createElement("img");
img.src="./img/logo"
logo.appendChild(img)
contnerForHeader.appendChild(logo)

let nav = document.createElement("nav");
contnerForHeader.appendChild(nav)

let aHome = document.createElement("a");
aHome.appendChild(document.createTextNode("Home"))
nav.appendChild(aHome)

let aAbout = document.createElement("a");
aAbout.appendChild(document.createTextNode("About"))
nav.appendChild(aAbout)

let aMenu = document.createElement("a");
aMenu.appendChild(document.createTextNode("Menu"))
nav.appendChild(aMenu)

let aReviews = document.createElement("a");
aReviews.appendChild(document.createTextNode("Reviews"))
nav.appendChild(aReviews)

let aTeam = document.createElement("a");
aTeam.appendChild(document.createTextNode("Team"))
nav.appendChild(aTeam)

let aBlog = document.createElement("a");
aBlog.appendChild(document.createTextNode("Blog"))
nav.appendChild(aBlog)

let aReservation = document.createElement("a");
aReservation.appendChild(document.createTextNode("Reservation"))
nav.appendChild(aReservation)

let icon = document.createElement("div");
icon.className="icon"
contnerForHeader.appendChild(icon);

let iconForSearch = document.createElement("div");
iconForSearch.className="icon-for-search"
let imgIconForSearch = document.createElement("img");
imgIconForSearch.src="./icon/search-regular-24.png";
iconForSearch.appendChild(imgIconForSearch)
icon.appendChild(iconForSearch)

let iconForInsert = document.createElement("div");
iconForInsert.className="icon-for-insert"
let imgIconForInsert = document.createElement("img");
imgIconForInsert.src="./icon/edit-regular-24.png";
iconForInsert.appendChild(imgIconForInsert)
icon.appendChild(iconForInsert)

let iconForProfil = document.createElement("div");
iconForProfil.className="icon-for-Profil"
let imgIconForProfil = document.createElement("img");
imgIconForProfil.src="./icon/user-solid-24.png";
iconForProfil.appendChild(imgIconForProfil)
icon.appendChild(iconForProfil)

let searchForm = document.createElement("form");
searchForm.className="search-form";
header.appendChild(searchForm)

let inputForSearch = document.createElement("input")
inputForSearch.type= "text";
inputForSearch.id="search-box";
inputForSearch.name="searchBox";
inputForSearch.placeholder="search here...."
searchForm.appendChild(inputForSearch)

let labelForSearchForm = document.createElement("label")
labelForSearchForm.setAttribute("for","search-box")
let imgForLabel = document.createElement("img")
imgForLabel.src="./icon/search-regular-24.png";
labelForSearchForm.appendChild(imgForLabel)
searchForm.appendChild(labelForSearchForm)


iconForSearch.addEventListener('click',(e) =>{
    indertForm.classList.remove('actve')
    searchForm.classList.toggle('actve')
})

searchForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
});


let indertForm = document.createElement("form");
indertForm.className="indert-form"
header.appendChild(indertForm);

let labelForNameDish= document.createElement('label')
labelForNameDish.setAttribute('for','name-dish')
labelForNameDish.appendChild(document.createTextNode("Name of The Meal:"))
indertForm.appendChild(labelForNameDish)

let inputForNameDish= document.createElement('input');
inputForNameDish.type="text"
inputForNameDish.id= "name-dish"
inputForNameDish.name= "name-dish"
inputForNameDish.className= "name-dish"
inputForNameDish.placeholder="Enter the name of the meal"
indertForm.appendChild(inputForNameDish)

let errorForName= document.createElement("div")
errorForName.className="error"
errorForName.appendChild(document.createTextNode("Please fill out the box of Name Meal"))
indertForm.appendChild(errorForName)

let labelForPriceDish= document.createElement('label')
labelForPriceDish.setAttribute('for','price-dish')
labelForPriceDish.appendChild(document.createTextNode("The Price of a Meal:"))
indertForm.appendChild(labelForPriceDish)

let inputForPriceDish= document.createElement('input');
inputForPriceDish.type="text"
inputForPriceDish.id= "price-dish"
inputForPriceDish.name= "price-dish"
inputForPriceDish.className= "price-dish"
inputForPriceDish.placeholder="Enter the price of the meal"
indertForm.appendChild(inputForPriceDish)

let errorForPrice= document.createElement("div")
errorForPrice.className="error"
errorForPrice.appendChild(document.createTextNode("Please fill out the box of Price Meal "))
indertForm.appendChild(errorForPrice)

let labelForCategoryDish= document.createElement('label')
labelForCategoryDish.setAttribute('for','category-dish')
labelForCategoryDish.appendChild(document.createTextNode("The Category of a Meal:"))
indertForm.appendChild(labelForCategoryDish)

let inputForCategoryDish= document.createElement('input');
inputForCategoryDish.type="text"
inputForCategoryDish.id= "category-dish"
inputForCategoryDish.name= "category-dish"
inputForCategoryDish.className= "category-dish"
inputForCategoryDish.placeholder="Enter the meal category"
indertForm.appendChild(inputForCategoryDish)

let errorForCategory= document.createElement("div")
errorForCategory.className="error"
errorForCategory.appendChild(document.createTextNode("Please fill out the box of Category Meal"))
indertForm.appendChild(errorForCategory)

let labelForimageForDish= document.createElement('label')
labelForimageForDish.setAttribute('for','image-for-dish')// let reu = /https:\/\/ (\w+.\w+.\w+)?(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;
labelForimageForDish.appendChild(document.createTextNode("Link Image For Meal:"))
indertForm.appendChild(labelForimageForDish)

let inputForimageForDish= document.createElement('input');
inputForimageForDish.type="text"
inputForimageForDish.id= "image-for-dish"
inputForimageForDish.name= "image-for-dish"
inputForimageForDish.className= "image-for-dish"
inputForimageForDish.placeholder="Enter the image link"
indertForm.appendChild(inputForimageForDish)

let errorForImage= document.createElement("div")
errorForImage.className="error"
errorForImage.appendChild(document.createTextNode("Verify the validity of the link"))
indertForm.appendChild(errorForImage)


let labelForingredientsForDish= document.createElement('label')
labelForingredientsForDish.setAttribute('for','ingredients-for-dish')
labelForingredientsForDish.appendChild(document.createTextNode("The meal ingredients:"))
indertForm.appendChild(labelForingredientsForDish)

let inputForingredientsForDish= document.createElement('textarea');
inputForingredientsForDish.type="text"
inputForingredientsForDish.id= "ingredients-for-dish"
inputForingredientsForDish.name= "ingredients-for-dish"
inputForingredientsForDish.className= "ingredients-for-dish"
inputForingredientsForDish.placeholder="Enter the meal ingredients"
indertForm.appendChild(inputForingredientsForDish)

let errorForIngredients= document.createElement("div")
errorForIngredients.className="error"
errorForIngredients.appendChild(document.createTextNode("Please fill out the box of  Ingredients Meal"))
indertForm.appendChild(errorForIngredients)




let inputForSubmit= document.createElement('input');
inputForSubmit.type="submit"
inputForSubmit.id= "submit-botton"
inputForSubmit.value="Submit"
indertForm.appendChild(inputForSubmit)


iconForInsert.addEventListener('click',(e) =>{
    searchForm.classList.remove('actve')
    indertForm.classList.toggle('actve')
})


document.body.appendChild(header)
// header section end  

// body section start
let section = document.createElement("section")
let contenrForTitle = document.createElement('div')
contenrForTitle.className='contenr-for-title'
section.appendChild(contenrForTitle)

let titleForPage = document.createElement('h2')
titleForPage.appendChild(document.createTextNode("Explore Our Menu"))
contenrForTitle.appendChild(titleForPage)

let descriptionForPage = document.createElement("p")
descriptionForPage.appendChild(document.createTextNode("At our menu, we strive to provide a unique and memorable dining experience for our guests. Our menu features a wide variety of dishes, from classic American favorites to international specialties. We use only the freshest ingredients, and our chefs take pride in creating delicious and beautifully presented meals."))
contenrForTitle.appendChild(descriptionForPage)

let  contenrForMenu = document.createElement('div')
contenrForMenu.className='contenr-for-menu'
section.appendChild(contenrForMenu)

document.body.appendChild(section)
// body section end

let dishes = [
    {
        name: "Burger",
        price: 20.99,
        category: "fast food",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        ingredients: "meat, cheese, onion, bread"
    },
    {
        name: "Pizza",
        price: 16.25,
        category: "fast food",
        image: "https://media.istockphoto.com/id/1388105989/photo/homemade-italian-pizza-carbonara-with-ham-and-basil-leaves-on-a-dark-background-top-view-with.jpg?s=1024x1024&w=is&k=20&c=VL-ynTeYtUSdnPVDjFXPmazwjxQf5PEJceIfFYRAQTY=",
        ingredients: "Bread, cheese, meat, vegetables"
    },
    {
        name: "Lasagna",
        price: 14.99,
        category: "Pasta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/320px-Lasagne_-_stonesoup.jpg",
        ingredients: "stacked layers of lasagna , ground meats, béchamel sauce, vegetables,cheeses,seasonings"
    },
    {
        name: "Prawns (shrimp)",
        price: 50.21,
        category: "Seafood",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Awadhi_prawns.jpg",
        ingredients: "lemon butter sauce, spicy garlic , rice,or  crusty bread"
    },{
        name: "Chicken fingers",
        price: 15.42,
        category: "Poultry",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Crispy_Chicken_Strips_-_FotoosVanRobin.jpg",
        ingredients: "A slice of chicken breast, flour, eggs"
    }

    
]



const showDishes = (array) =>{ 
    contenrForMenu.innerHTML = "";
    array.forEach(items =>{
    

        const card= document.createElement("div")
        card.className="card"
        contenrForMenu.appendChild(card)

        const imgForMeal = document.createElement("img")
        imgForMeal.src=items.image
        card.appendChild(imgForMeal)

        const description= document.createElement("div")
        description.className="description"
        card.appendChild(description)

        const nameMeal = document.createElement("h4")
        nameMeal.className="name-meal"
        const spanForName = document.createElement("span")
        spanForName.className="span"
        spanForName.textContent="Name:  "
        nameMeal.appendChild(spanForName)
        nameMeal.appendChild(document.createTextNode(items.name))
        description.appendChild(nameMeal)

        const categoryMeal = document.createElement("h4")
        categoryMeal.className="category-meal"
        const spanForCategory = document.createElement("span")
        spanForCategory.className="span"
        spanForCategory.textContent="Category:  "
        categoryMeal.appendChild(spanForCategory)
        categoryMeal.appendChild(document.createTextNode(items.category))
        description.appendChild(categoryMeal)

        const ingredientsMeal = document.createElement("p")
        ingredientsMeal.className="ingredients-meal"
        const spanForIngredients = document.createElement("span")
        spanForIngredients.className="span"
        spanForIngredients.textContent="Ingredients:  "
        ingredientsMeal.appendChild(spanForIngredients)
        ingredientsMeal.appendChild(document.createTextNode(items.ingredients))
        description.appendChild(ingredientsMeal)
        
        const contenrForPrice = document.createElement("div")
        contenrForPrice.className="contenr-for-price"
        card.appendChild(contenrForPrice)

        const priceMeal = document.createElement("h4")
        priceMeal.className= "price-meal"
        priceMeal.appendChild(document.createTextNode(items.price))
        contenrForPrice.appendChild(priceMeal)
        

        const order = document.createElement("a")
        order.textContent="Order"
        contenrForPrice.appendChild(order)

        
    })
}

searchForm.addEventListener('submit',(e)=>{

    if (inputForSearch.value.trim()){
        
        const filterDishes= dishes.filter(item => 
            item.category.includes(inputForSearch.value.trim()) 
        || Math.floor(item.price) === Math.floor(+inputForSearch.value.trim()) 
        || item.name.includes(inputForSearch.value.trim()) )
        showDishes(filterDishes)
    }
})

inputForSearch.addEventListener('change',(e) =>{
    
    if(!(e.target.value.trim())){
        showDishes(dishes)       
    }})

showDishes(dishes)


const insertDishes = ()=>{
    const userInput = {
        name: inputForNameDish.value,
        price: inputForPriceDish.value,
        category:inputForCategoryDish.value,
        image:inputForimageForDish.value,
        ingredients: inputForingredientsForDish.value,
    }
    dishes.push(userInput);
    showDishes(dishes)
    }
    
let reu = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;


indertForm.addEventListener("submit", function(evt){

    evt.preventDefault();
    if(inputForNameDish.value.length === 0){
        errorForName.classList.add('errorDiv')
        inputForNameDish.classList.add('errorinput')
        
    }else{
        errorForName.classList.remove('errorDiv')
        inputForNameDish.classList.remove('errorinput')

    }
    if(inputForPriceDish.value.length ===0 ){
        errorForPrice.classList.add('errorDiv')
        inputForPriceDish.classList.add('errorinput')

    }else{
        errorForPrice.classList.remove('errorDiv')
        inputForPriceDish.classList.remove('errorinput')

    }
    if(inputForCategoryDish.value.length === 0 ){
        errorForCategory.classList.add('errorDiv')
        inputForCategoryDish.classList.add('errorinput')

    }else{
        errorForCategory.classList.remove('errorDiv')
        inputForCategoryDish.classList.remove('errorinput')

    }
    
    if(!(reu.test(inputForimageForDish.value ))){
        errorForImage.classList.add('errorDiv')
        inputForimageForDish.classList.add('errorinput')
        
    }else{
        errorForImage.classList.remove('errorDiv')
        inputForimageForDish.classList.remove('errorinput')
        console.log(reu.test(inputForimageForDish.value))
        
    }
    if(inputForingredientsForDish.value.length === 0){
        errorForIngredients.classList.add('errorDiv')
        inputForingredientsForDish.classList.add('errorinput')

    }else{
        errorForIngredients.classList.remove('errorDiv')
        inputForingredientsForDish.classList.remove('errorinput')

    }
})

indertForm.addEventListener("submit", function(evt) {
    

    
    if(inputForNameDish.value.length != 0 && inputForPriceDish.value.length !=0  && inputForCategoryDish.value.length !=0 &&  (reu.test(inputForimageForDish.value )) &&inputForingredientsForDish.value.length!=0 ){
        insertDishes()

        
        inputForNameDish.value= null
        inputForPriceDish.value= null
        inputForCategoryDish.value= null
        inputForimageForDish.value= null
        inputForingredientsForDish.value= null
    }
});