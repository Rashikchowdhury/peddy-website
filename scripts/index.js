// fetch categories data
const categoriesData = async() => {
    try{
        let res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.error(err);
    }
};

const categoryBtn = () => {
    const categoryBtnContainer = document.getElementById("category-btn-container");
    
}

categoriesData();