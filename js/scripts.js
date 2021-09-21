const images = document.querySelector(".allimage").children;
const users = document.querySelector(".alluser").children;
console.log(images, users)
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        this.Array.from(images).forEach((e) => {
            e.classList.remove("active");
        });
        images[i].classList.add("active");
        Array.from(users).forEach((e) => {
            e.classList.remove("active");
        })
        users[i].classList.add("active");
    })
}