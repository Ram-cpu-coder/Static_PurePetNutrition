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
        const response = await fetch(
            "https://purepetnutrition-gjecgvaxgmgtcfcc.australiaeast-01.azurewebsites.net/api/blogs.php"
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const blogArr = await response.json();

        const filteredBlogs =
            category === "all"
                ? blogArr
                : blogArr.filter((blog) => blog.category === category);

        const validBlogs = filteredBlogs.filter(
            (item) =>
                item.title &&
                item.description &&
                !item.title.toLowerCase().includes("dfgh") &&
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

    if (!blogArr.length) {
        blogsContainer.innerHTML = `<p>No blogs found for this category.</p>`;
        return;
    }

    const blogHTML = blogArr
        .map((item) => {
            return `
            <a href="blog.html?id=${item.id}" aria-label="Read more about ${item.title}">
              <article class="blogCard" data-category="${item.category}">
                <img src="${item.image ?? "https://via.placeholder.com/300x200?text=No+Image"
                }" alt="${item.title}" class="blogThumbnail" />
                <h2>${item.title}</h2>
                <span class="badge">${item.category}</span>
                <p>${item.description}</p>
                <p class="blogMeta">Published on ${item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : "Unknown date"
                }</p>
              </article>
            </a>`;
        })
        .join("");

    blogsContainer.innerHTML = blogHTML;
}

function filterBlogs() {
    const filterSelect = document.getElementById("blogFilter");
    const selectedCategory = filterSelect.value;
    fetchBlogs(selectedCategory);
}

// Initialize blog rendering on page load
document.addEventListener("DOMContentLoaded", () => fetchBlogs());
