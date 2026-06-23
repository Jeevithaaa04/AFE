document.addEventListener("DOMContentLoaded", () => { fetchNews(); });

async function fetchNews() {
    const container = document.getElementById("news-container");
    const endpoint = "https://raw.githubusercontent.com/atilsamancioglu/IA32-NewsInKit/main/news.json";

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Network response error.");
        
        const articles = await response.json();
        container.innerHTML = ""; 

        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600'}" alt="Thumbnail">
                <div class="card-content">
                    <h3 class="card-title">${article.title || "No Headline"}</h3>
                    <p class="card-desc">${article.description || "No description provided."}</p>
                    <a href="${article.url}" target="_blank" class="card-link">Read Article →</a>
                </div>`;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = `<div class="loader" style="color: red;">Failed to load data stream.</div>`;
    }
}