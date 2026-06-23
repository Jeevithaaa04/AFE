document.addEventListener("DOMContentLoaded", () => { 
    fetchNews(); 
});

async function fetchNews() {
    const container = document.getElementById("news-container");
    
    // Completely stable, highly available open-source backup endpoint
    const endpoint = "https://raw.githubusercontent.com/jamesacampbell/fresh-news-api/master/sample.json";

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Network data stream pipeline down.");
        
        const data = await response.json();
        container.innerHTML = ""; // Clear out the loading message

        // Extracting articles from this specific API layout structure
        const articles = data.articles || data;

        articles.slice(0, 12).forEach(article => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600'}" alt="News Feed Media Cover">
                <div class="card-content">
                    <h3 class="card-title">${article.title || "Breaking Headline"}</h3>
                    <p class="card-desc">${article.description || "Click the reference documentation link below to read the comprehensive news profile coverage summary live from the publisher."}</p>
                    <a href="${article.url}" target="_blank" class="card-link">Read Full Coverage →</a>
                </div>`;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Pipeline breakdown:", error);
        container.innerHTML = `<div class="loader" style="color: red; text-align: center; font-weight: bold; padding: 40px;">Failed to load data stream.</div>`;
    }
}
