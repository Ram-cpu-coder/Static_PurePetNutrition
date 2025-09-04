// Toggle navigation menu for mobile
function toggleNavMenu() {
    const menuBox = document.getElementById("menuBox");
    if (menuBox.style.display === "none" || window.getComputedStyle(menuBox).display === "none") {
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

// Blog rendering from API
async function fetchBlogs(category = "all") {
    try {
        const response = await fetch("https://purepetnutrition-gjecgvaxgmgtcfcc.australiaeast-01.azurewebsites.net/api/blogs.php");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const blogArr = await response.json();

        const filteredBlogs = category === "all"
            ? blogArr
            : blogArr.filter(blog => blog.category === category);

        const validBlogs = filteredBlogs.filter(item =>
            item.name && item.description &&
            !item.name.toLowerCase().includes("dfgh") &&
            !item.description.toLowerCase().includes("fdgh")
        );

        renderBlogs(validBlogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        const blogsContainer = document.getElementById("blogsContainer");
        if (blogsContainer) {
            blogsContainer.innerHTML = `<p>Unable to load blogs at the moment.</p>`;
        }
    }
}

function renderBlogs(blogArr) {
    const blogsContainer = document.getElementById("blogsContainer");
    if (!blogsContainer) return;

    const blogHTML = blogArr.map((item) => {
        return `<a href="https://dev.to/" aria-label="Read more about ${item.name}">
      <article class="blogCard" data-category="${item.category}">
        <img src="${item.image}" alt="${item.name}" class="blogThumbnail" />
        <h2>${item.name}</h2>
        <span class="badge">${item.category}</span>
        <p>${item.description}</p>
        <p class="blogMeta">Published on ${new Date(item.created_at).toLocaleDateString()}</p>
      </article>
    </a>`;
    }).join("");

    blogsContainer.innerHTML = blogHTML;
}

function filterBlogs() {
    const filterSelect = document.getElementById("blogFilter");
    const selectedCategory = filterSelect.value;
    fetchBlogs(selectedCategory);
}

// Initialize blog rendering on page load
document.addEventListener("DOMContentLoaded", () => fetchBlogs());