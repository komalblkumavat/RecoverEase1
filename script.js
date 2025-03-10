document.getElementById("postItemForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const status = document.getElementById("status").value;

    const response = await fetch("http://localhost:5000/post-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, category, location, status })
    });

    const data = await response.json();
    alert(data.message);
    loadItems();
});

async function loadItems() {
    const response = await fetch("http://localhost:5000/items");
    const items = await response.json();
    
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ${item.title} - ${item.status} in ${item.location};
        itemsList.appendChild(li);
    });
}

loadItems();

