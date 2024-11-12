// โหลดข้อมูลจากไฟล์ JSON และแสดงบนหน้าเว็บ
async function loadContent() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        const contentDiv = document.getElementById('content');
        data.links.forEach(link => {
            const linkDiv = document.createElement('div');
            linkDiv.className = 'link-item';
            linkDiv.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
            contentDiv.appendChild(linkDiv);
        });
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

window.onload = loadContent;

// ตรวจสอบว่าผู้ใช้ได้ login แล้ว
if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}
