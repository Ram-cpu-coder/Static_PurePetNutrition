// hambuger in the navbar
function toggleNavMenu() {
    const menuBox = document.getElementById("menuBox");
    const currentDisplay = window.getComputedStyle(menuBox).display;

    console.log(menuBox)
    if (currentDisplay === "none") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
}


// blog page
const blogArr = [
    {
        "title": "What Makes a Pet Food Truly ‘Healthy’?",
        "category": "Pet Nutrition",
        "description": "An overview of essential nutrients and what to look for in premium pet food."
    },
    {
        "title": "Understanding Pet Food Labels: What to Look For",
        "category": "Pet Nutrition",
        "description": "A breakdown of ingredient lists, guaranteed analysis, and marketing buzzwords."
    },
    {
        "title": "Benefits of Omega-3 for Dogs and Cats",
        "category": "Ingredient Spotlight",
        "description": "How Omega-3 supports your pet’s skin, coat, joints, and heart health."
    },
    {
        "title": "5 Superfoods Your Pet Can Eat",
        "category": "Ingredient Spotlight",
        "description": "Nutrient-rich foods like pumpkin, blueberries, and more that are safe for pets."
    },
    {
        "title": "Signs Your Pet Might Have a Food Allergy",
        "category": "Health & Wellness",
        "description": "How to recognize common allergy symptoms and what dietary changes can help."
    },
    {
        "title": "How Diet Affects Your Pet’s Energy & Mood",
        "category": "Health & Wellness",
        "description": "The connection between nutrition and behavioral or energy changes in pets."
    },
    {
        "title": "How Much Should You Feed Your Dog? A Breed-Based Guide",
        "category": "Feeding Guide",
        "description": "Feeding recommendations based on dog size, breed, and activity level."
    },
    {
        "title": "When to Switch from Puppy to Adult Food",
        "category": "Feeding Guide",
        "description": "Age and developmental signs that it’s time to adjust your pet’s diet."
    },
    {
        "title": "Why We Started PurePet Nutrition",
        "category": "Behind the Brand",
        "description": "Our journey from pet lovers to nutrition-focused entrepreneurs."
    },
    {
        "title": "How We Source Our Organic Ingredients",
        "category": "Behind the Brand",
        "description": "Our commitment to sustainability and ingredient transparency."
    }
]
const blogsContainer = document.getElementById("blogsContainer");
const blogHTML = blogArr.map((item) => {
    return `<a href ="https://dev.to/"><article class="blogCard">
        <h2>${item.title}</h2>
        <span class="badge">${item.category}</span>
        <p>
            ${item.description}
        </p>
    </article></a>`
}).join("")

blogsContainer.innerHTML = blogHTML;
