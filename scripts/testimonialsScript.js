let testimonials = [];
let currentIndex = 0;

async function fetchTestimonials() {
    try {
        const response = await fetch("https://purepetnutrition-gjecgvaxgmgtcfcc.australiaeast-01.azurewebsites.net/api/testimonials.php");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        // Map product-style data into testimonial format
        testimonials = data.map(item => ({
            text: item.description,
            author: item.name
        })).filter(t => t.text && t.author); // filter out empty entries

        if (testimonials.length > 0) {
            renderTestimonial(currentIndex);
            startAutoRotation(); // 🔁 Start rotating testimonials
        } else {
            displayFallback();
        }
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        displayFallback();
    }
}

function renderTestimonial(index) {
    const container = document.getElementById("testimonial-container");
    if (!container || testimonials.length === 0) return;

    const { text, author } = testimonials[index];
    container.innerHTML = `
    <div class="testimonial active">
      <p>"${text}"</p>
      <p><strong>- ${author}</strong></p>
    </div>
  `;
}

function nextTestimonial() {
    if (testimonials.length === 0) return;
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
}

function displayFallback() {
    const container = document.getElementById("testimonial-container");
    if (container) {
        container.innerHTML = `<p class="testimonial active">No testimonials available at the moment.</p>`;
    }
}

function startAutoRotation() {
    setInterval(() => {
        nextTestimonial();
    }, 5000); // ⏱ Rotate every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => fetchTestimonials());