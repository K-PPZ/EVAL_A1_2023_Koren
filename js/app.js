let plats = document.getElementById("plats");
// let articles = document.getElementsByName("article");
let imgs = document.getElementsByClassName("imgs");

for (let i = 1; i <= 5; i++) {
    plats.innerHTML += `
    <article>
        <div class="imgs">
            <img src="img/img-0${i}.jpg" alt="#">
        </div>
        
        <div class="desc">
            <h2>UN SUPER TITRE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit error vero unde velit sapiente nemo doloribus deleniti accusantium.</p>
        </div>
    </article>
    `;
    // if (i % 2 === 0) {
    //     articles[i].style.backgroundColor = "red";
    // }
}