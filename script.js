// ตรวจสอบว่าผู้ใช้ได้ login แล้ว
if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}
