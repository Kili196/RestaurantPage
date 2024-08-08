class Menu {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDesc() {
        return this.description;
    }
}

const menuItems = [
    new Menu("Grilled Chicken Salad", 12.99, "A healthy mix of grilled chicken, fresh greens, tomatoes, and a tangy vinaigrette."),
    new Menu("Classic Cheeseburger", 10.99, "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce."),
    new Menu("Margherita Pizza", 14.99, "Traditional pizza with fresh mozzarella, tomatoes, and basil."),
    new Menu("Spaghetti Carbonara", 13.99, "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese."),
    new Menu("Chocolate Lava Cake", 6.99, "Decadent chocolate cake with a molten center, served with vanilla ice cream."),
    new Menu("Caesar Salad", 9.99, "Crisp romaine lettuce, croutons, and Parmesan cheese, tossed in Caesar dressing."),
    new Menu("BBQ Ribs", 19.99, "Slow-cooked ribs smothered in our house-made BBQ sauce, served with coleslaw."),
    new Menu("Fish and Chips", 15.99, "Crispy battered fish served with golden fries and tartar sauce."),
    new Menu("Vegetarian Stir-Fry", 11.99, "A vibrant mix of vegetables sautéed in a savory soy-ginger sauce, served over rice."),
    new Menu("Tiramisu", 7.99, "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.")
];

function returnMenu() {
    let menuSection = document.createElement("SECTION");
    menuSection.className = "sectionToShow"
    let headline = document.createElement("h1");
    headline.innerHTML = "MENU";
    menuSection.appendChild(headline);
    menuItems.forEach((menu) => {
        let menu_item = document.createElement("div")
        let headline = document.createElement("h1");
        let paragraph = document.createElement("p");
        menu_item.className = "menu-item";
        headline.innerHTML = `${menu.name} - $${menu.price}`
        paragraph.innerHTML = menu.description;
        menu_item.appendChild(headline);
        menu_item.appendChild(paragraph);
        menuSection.appendChild(menu_item);
    })

    return menuSection;
}


export { returnMenu }