// fetch categories data
const categoriesData = async () => {
    try {
        let res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
        let data = await res.json();
        loadCategoryBtn(data.categories);
    }
    catch (err) {
        console.error(err);
    }
};

const categoryBtn = () => {
    const categoryBtnContainer = document.getElementById("category-btn-container");

};
categoriesData();

// category buttons
const loadCategoryBtn = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");

    categories.forEach(item => {
        let categoryBtnContainer = document.createElement('div');

        categoryBtnContainer.innerHTML = `
            <button id="${item.id}" onclick="changeBtnStyle(${item.id})" class="active btn btn-sm md:btn-lg flex gap-2 text-[10px] md:text-2xl font-bold bg-white border border-pri-clr hover:bg-white hover:border-pri-clr">
                <img src="${item.category_icon}" class="w-4 md:w-8"/>
                ${item.category}
            </button>
        `;

        categoriesContainer.append(categoryBtnContainer);
    })
}

// change category btn style on click
const changeBtnStyle = (id) => {
    const buttons = document.getElementsByClassName("active");
    
    for(let btn of buttons){
        btn.classList.remove("round-btn")
    }
    document.getElementById(id).classList.add("round-btn");
}