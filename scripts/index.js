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

    for (let btn of buttons) {
        btn.classList.remove("round-btn")
    }
    document.getElementById(id).classList.add("round-btn");
}


// fetch all pet's data
const allPetsData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    loadAllPets(data.pets);
};

allPetsData();

const loadAllPets = (arr) => {
    const petsContainer = document.getElementById("all-pets-container");
    arr.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="w-[90vw] md:w-80 p-5 shadow-xl rounded-xl">
            <figure class="mb-6 flex justify-center">
                <img src="${item.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="">
                <h2 class="card-title mb-2">${item.pet_name}</h2>
                <p class="flex gap-1">
                    <img src="./images/breed.svg" />
                    Breed: ${item.breed}
                </p>
                <p class="flex gap-1">
                    <img src="./images/birth.svg" />
                    Birth: ${item.date_of_birth}
                </p>
                <p class="flex gap-1">
                    <img src="./images/gender.svg" />
                    Gender: ${item.gender}
                </p>
                <p class="flex gap-1 mb-4">
                    <img src="./images/price.svg" />
                    Price: ${item.price}
                </p>
                <hr>
                <div class="flex justify-evenly md:justify-between mt-4">
                <button class="btn btn-sm  border-pri-clr text-pri-clr bg-white hover:bg-pri-clr">
                    <img src="./images/like.svg" />
                </button>
                <button class="btn btn-sm border-pri-clr text-pri-clr bg-white hover:bg-pri-clr hover:text-white">Adopt</button>
                <button class="btn btn-sm border-pri-clr text-pri-clr bg-white hover:bg-pri-clr hover:text-white">Details</button>
                </div>
            </div>
        </div>
        `;

        petsContainer.append(div)
    })
};

const loader = document.getElementById("loader");
const petsSection = document.getElementById("pets-section");

setTimeout(() => {
    loader.classList.add("hidden");
    petsSection.classList.remove("hidden")
}, 1000)