
function loadProjects() {
    const list = document.getElementById('project-list');
    list.innerHTML = projects.map(p => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h4 class="text-xl font-bold mb-2">${p.title}</h4>
            <p class="text-gray-600 mb-4">${p.description}</p>
            <a href="${p.link}" class="text-blue-600 font-semibold hover:underline">View Project →</a>
        </div>
    `).join('');
}

// this function will run the page loads
window.onload = loadProjects;


const projects = [
    { title: "Todo App", desc: "Task management with LocalStorage", color: "bg-blue-500" },
    { title: "Portfolio Site", desc: "Modern Tailwind & JS Showcase", color: "bg-purple-500" },
    { title: "E-Commerce", desc: "A sleek shopping experience", color: "bg-emerald-500" },
    { title: "Weather Hub", desc: "Real-time API data fetching", color: "bg-orange-500" }
];

function loadCarousel() {
    const container = document.getElementById('project-carousel');
    container.innerHTML = projects.map(p => `
        <div class="project-card flex-shrink-0 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 cursor-pointer snap-center w-80 md:w-96">
            <div class="${p.color} h-48 w-full rounded-2xl mb-6 opacity-80 flex items-center justify-center text-white text-4xl">
                🚀
            </div>
            <h4 class="text-2xl font-bold mb-2">${p.title}</h4>
            <p class="text-gray-500 mb-6">${p.desc}</p>
            <button class="text-blue-600 font-bold group flex items-center gap-2">
                View Details <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>
    `).join('');
}

window.onload = loadCarousel;

// Function to handle form submission (not linked to formspree, just for demo purposes)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from refreshing


    const toast = document.getElementById('success-toast');


    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    this.reset();

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
});