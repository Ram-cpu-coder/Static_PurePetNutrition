const testimonials = [
    {
        "text": "My dog’s health improved with PurePet food! The organic ingredients made a noticeable difference in his energy levels.",
        "author": "Jane D."
    },
    {
        "text": "Excellent supplements for my cat’s coat! Her fur is shinier than ever since we started using PurePet.",
        "author": "Mark T."
    },
    {
        "text": "Highly reliable for pet care needs. I trust PurePet for all my pet’s nutritional requirements.",
        "author": "Sarah L."
    }
];

let currentIndex = 0;

function renderTestimonial(index) {
    const container = document.getElementById("testimonial-container");
    if (!container) return; // Exit if container not found (e.g., on other pages)

    container.innerHTML = `<p class="testimonial active">${testimonials[index].text} <strong>- ${testimonials[index].author}</strong></p>`;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderTestimonial(currentIndex);
}

// Initialize first testimonial on page load
document.addEventListener("DOMContentLoaded", () => renderTestimonial(currentIndex));