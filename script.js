// Toggle navigation menu for mobile
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

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Image enlarging
function enlargeImage(imgElement) {
    const enlargedContainer = document.getElementById("enlargedImageContainer");
    const enlargedImage = document.getElementById("enlargedImage");
    enlargedImage.src = imgElement.src;
    enlargedImage.alt = imgElement.alt;
    enlargedContainer.style.display = "flex";
}

function closeEnlargedImage() {
    const enlargedContainer = document.getElementById("enlargedImageContainer");
    enlargedContainer.style.display = "none";
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
];

function renderBlogs(category = "all") {
    const blogsContainer = document.getElementById("blogsContainer");
    if (!blogsContainer) return;

    const filteredBlogs = category === "all" ? blogArr : blogArr.filter(blog => blog.category === category);

    const blogHTML = filteredBlogs.map((item) => {
        return `<a href="https://dev.to/" aria-label="Read more about ${item.title}">
            <article class="blogCard" data-category="${item.category}">
                <h2>${item.title}</h2>
                <span class="badge">${item.category}</span>
                <p>${item.description}</p>
            </article>
        </a>`;
    }).join("");

    blogsContainer.innerHTML = blogHTML;
}

function filterBlogs() {
    const filterSelect = document.getElementById("blogFilter");
    const selectedCategory = filterSelect.value;
    renderBlogs(selectedCategory);
}

function toggleNavMenu() {
    const menuBox = document.getElementById("menuBox");
    if (menuBox.style.display === "none" || window.getComputedStyle(menuBox).display === "none") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
}

function enlargeImage(imgElement) {
    const enlargedContainer = document.getElementById("enlargedImageContainer");
    const enlargedImage = document.getElementById("enlargedImage");
    enlargedImage.src = imgElement.src;
    enlargedImage.alt = imgElement.alt;
    enlargedContainer.style.display = "flex";
}

function closeEnlargedImage() {
    const enlargedContainer = document.getElementById("enlargedImageContainer");
    enlargedContainer.style.display = "none";
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Initialize blog rendering on page load
document.addEventListener("DOMContentLoaded", () => renderBlogs());
