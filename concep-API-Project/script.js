const categoriesContainer = document.getElementById('catagoriesContainer');
const treesContainer = document.getElementById('treesContainer');
const loadingSpanner = document.getElementById('loading-spinner');



async function loadCategories() {

    // async await eta use kora valo
    const res = await fetch('https://openapi.programming-hero.com/api/categories');

    const data = await res.json();
    console.log(data);
    console.log(categoriesContainer);
    data.categories.forEach(category => {
        console.log(category);
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline w-full';
        btn.textContent = category.category_name
        categoriesContainer.appendChild(btn);

    });
    // categoriesContainer.innerHTML = "batton asbe"
};

function showLoading(){
    loadingSpanner.classList.remove('hidden');
    treesContainer.innerHTML = '';
}

function hiddenLoading(){
    loadingSpanner.classList.add('hidden');
}

async function loadTrees() {
    showLoading();
    //loadingSpanner.classList.add('flex');
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
 hiddenLoading();
    
    displayTrees(data.plants);

};
// forEach loop diye o korte partam nicher onsho
function displayTrees(trees) {
    console.log(trees);
    trees.forEach(tree => {
        console.log(tree);
        const card = document.createElement('div');
        card.className = "card bg-white shadow-sm";
        card.innerHTML = `
         <figure>
                <img src='${tree.image}'; 
                    alt="${tree.name}"
                    title = "${tree.name}"
                    class = "h-48 w-full object-cover"
                >    
            </figure>
            <div class="card-body">
                <h2 class="card-title">${tree.name}</h2>
                <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions
                    parts</p>

                <div class="badge badge-success badge-outline">${tree.category}</div>

                <div class="card-actions justify-between items-center">
                    <h2 class="font-bold text-xl text-[#4ad380]">$${tree.price}</h2>
                    <button class="btn btn-primary">Cart</button>
                </div>
            </div>`;
        treesContainer.appendChild(card);    
        
    })
};

loadCategories();
loadTrees();
