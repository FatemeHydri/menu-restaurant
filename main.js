var foodList = [{
    id: 1,
    type: "Main Food",
    name: "Fesenjan",
    description: "Fesenjan is a traditional Persian stew, with fall-off-the-bone tender chicken cooked in a nutty, rich, sweet and sour pomegranate molasses and walnut sauce.",
    cost: "31",
    pic: "assets/images/Fesenjan-recipe-FINAL-7.jpg"
}, {
    id: 2,
    type: "Main Food",
    name: "Kabab Torsh",
    description: "Kabob Torsh is a unique Iranian dish made with juicy beef marinated in pomegranate molasses, walnuts and herbs. This marinated beef kabob from northern Iran is usually served with rice.",
    cost: "32",
    pic: "assets/images/kabab-torsh-2.1200pxx.jpg",
}, {
    id: 3,
    type: "Main Food",
    name: "Ghormeh Sabzi",
    description: "Ghormeh Sabzi is a Persian herb stew loaded with dried limes, fresh herbs, and spinach, simmered in a pot with chunks of tender beef or lamb and red kidney beans.",
    cost: "34",
    pic: "assets/images/Ghormeh-Sabzi-4-1024x1536.jpg",
}, {
    id: 4,
    type: "Main Food",
    name: "Khoresht Gheymeh",
    description: "Khoresh Gheymeh (gheimeh), also called Gheymeh Polo (polo means rice) is a Beef and Split Pea Stew which is a very traditional and popular Iranian stew with saffron potatoes.",
    cost: "35",
    pic: "assets/images/Gheymeh_stew.jpg",
}, {
    id: 5,
    type: "Main Food",
    name: "TahChin",
    description: "Tahchin Morgh is a delicious comfort food with an elegant presentation without too much fuss. There are different types of Tahchin in Persian cuisine.",
    cost: "30",
    pic: "assets/images/tahchin.jpg",
}, {
    id: 6,
    type: "Appetizer",
    name: "MirzaGhasemi",
    description: "Mirza Ghasemi is a Persian dip that’s so full of flavor, it will make your taste buds dance! It’s made with smoky eggplants that have been charred to perfection with a vibrant tomato sauce and silky eggs.",
    cost: "21",
    pic: "assets/images/Vegan+Mirza+Ghasemi-2.jpg"
}, {
    id: 7,
    type: "Appetizer",
    name: "Mahi Doodi",
    description: "A traditional Nowruz lunch or dinner always includes a platter of sabzi polow (mixed herb rice) with mahi (fish). The fish is usually served either doodi (smoked/salted) or sorkh kardeh (pan-fried).",
    cost: "23",
    pic: "assets/images/Mahi Doodi-TS.jpg",
}, {
    id: 8,
    type: "Appetizer",
    name: "Salad Shirazi",
    description: "Shirazi Salad, or Salad-e Shirazi, is a simple and bright Persian cucumber and tomato salad that's loaded with herbs and dressed in citrus and extra virgin olive oil",
    cost: "22",
    pic: "assets/images/SaladShirazi-a882a04.jpg",
}, {
    id: 9,
    type: "Appetizer",
    name: "Kashk Bademjan",
    description: "Kashke Bademjan is a popular Persian Eggplant Dip that is easy to make. It's a perfect warm appetizer, served with Persian or Pita bread.",
    cost: "17",
    pic: "assets/images/Kashke-Bademjan-Persian-Eggplant-Dip-Featured.jpg",
}, {
    id: 10,
    type: "Dessert",
    name: "Tiramisu",
    description: "Tiramisu is a timeless no-bake Italian dessert combining espresso-dipped ladyfingers and a creamy lightly sweetened mascarpone cream.",
    cost: "13",
    pic: "assets/images/Tiramisu-6.jpg",
}, {
    id: 11,
    type: "Dessert",
    name: "Chesse Cake",
    description: "This is truly the most perfect and easy no-bake cheesecake. By following this no-bake cheesecake recipe, you’ll be gifted.",
    cost: "14",
    pic: "assets/images/no-bake-cheesecake-4.jpg",
}, {
    id: 12,
    type: "Dessert",
    name: "Red velvet",
    description: "There is something so elegant about a red velvet cake. Maybe it’s the name or that beautiful, bold red color.",
    cost: "16",
    pic: "assets/images/red-velvet-cake-recipe.jpg",
}, {
    id: 13,
    type: "Dessert",
    name: "Barone",
    description: "A chocolate Sponge layered with Barone and fresh cream covered with dark chocolate. ",
    cost: "15",
    pic: "assets/images/BrenellBar-One-Chocolate-Cake-24cm-1.jpg",
}, {
    id: 14,
    type: "Hot Drink",
    name: "Espresso",
    description: "Our espresso roast—smooth with thick crema!",
    cost: "14",
    pic: "assets/images/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg",
}, {
    id: 15,
    type: "Hot Drink",
    name: "Cappucino",
    description: "Espresso, some steamed milk, mostly foam.",
    cost: "10",
    pic: "assets/images/33442e58a74503c7cef4fc437a4ebc8e.jpg",
}, {
    id: 16,
    type: "Hot Drink",
    name: "Hot Tea",
    description: "Revolution® full leaf gourmet teas!",
    cost: "12",
    pic: "assets/images/close-up-of-a-cup-of-tea.jpg",
}, {
    id: 17,
    type: "Cold Drink",
    name: "Soda",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
    cost: "8",
    pic: "assets/images/glass-of-cold-cola-soft-drink-with-ice-on-wooden-royalty-free-image-1643740875.jpg",
}, {
    id: 18,
    type: "Cold Drink",
    name: "Water",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
    cost: "2",
    pic: "assets/images/chilled-water_620x350_41493276453.jpg",
}]
allFood();

function showItems(item, i, array) {
    var item = document.createElement("DIV");
    var divImage = document.createElement("DIV");
    var image = document.createElement("IMG");
    var details = document.createElement("DIV");
    var foodName = document.createElement("H2");
    var description = document.createElement("P");
    var cost = document.createElement("SPAN");
    var btn = document.createElement("BUTTON");
    divImage.classList.add("image-div");
    image.classList.add("img");
    details.classList.add("details");
    foodName.classList.add("food-name");
    description.classList.add("description");
    cost.classList.add("cost");
    btn.classList.add("btn-curve");
    image.setAttribute("src", array[i].pic);
    divImage.appendChild(image);
    item.appendChild(divImage);
    item.appendChild(details);
    foodName.textContent = array[i].name;
    description.textContent = array[i].description;
    cost.textContent = "cost: $ " + array[i].cost;
    btn.textContent = "ADD TO CARD";
    details.appendChild(foodName);
    details.appendChild(description);
    details.appendChild(cost);
    details.appendChild(btn);
    document.querySelector(".items").appendChild(item);
    item.classList.add("item");
};

function allFood() {
    document.querySelector(".items").innerHTML = "";
    foodList.map(showItems);
};

function mainFood() {
    document.querySelector(".items").innerHTML = "";
    var newFood = foodList.filter(function(foodList) {
        return foodList.type === "Main Food";
    });
    newFood.map(showItems);
};

function appetizer() {
    document.querySelector(".items").innerHTML = "";
    var newFood = foodList.filter(function(foodList) {
        return foodList.type === "Appetizer";
    });
    newFood.map(showItems);
};

function dessert() {
    document.querySelector(".items").innerHTML = "";
    var newFood = foodList.filter(function(foodList) {
        return foodList.type === "Dessert";
    });
    newFood.map(showItems);
};

function hotDrink() {
    document.querySelector(".items").innerHTML = "";
    var newFood = foodList.filter(function(foodList) {
        return foodList.type === "Hot Drink";
    });
    newFood.map(showItems);
};

function coldDrink() {
    document.querySelector(".items").innerHTML = "";
    var newFood = foodList.filter(function(foodList) {
        return foodList.type === "Cold Drink";
    });
    newFood.map(showItems);
};

function lightDark() {
    var body = document.body;
    body.classList.toggle("body-dark-mode");
    const btnCurve = document.querySelectorAll(".btn-curve");
    for (let i = 0; i < btnCurve.length; i++) {
        btnCurve[i].classList.toggle("btn-curve-dark-mode");
    }
    const item = document.querySelectorAll(".item");
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle("item-dark-mode");
    }
    const description = document.querySelectorAll(".description");
    for (let i = 0; i < description.length; i++) {
        description[i].classList.toggle("description-dark-mode");
    }
};