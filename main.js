const btnChamps = document.querySelectorAll(".champs");
const body = document.body;

setInterval(() => {
const currentColor = getComputedStyle(body).backgroundColor;
    if (currentColor == "rgb(94, 94, 235)") {
        body.style.backgroundColor = "rgb(8, 8, 61)";

    }else {
        body.style.backgroundColor = "rgb(94, 94, 235)";
        
    }

    for (let i = 0; i < btnChamps.length; i++) {
        const btnChamp = btnChamps[i];
        const imgChamps = btnChamp.firstElementChild;

        if (currentColor === "rgb(8, 8, 61)" && getComputedStyle(btnChamp).backgroundColor === "rgb(0, 0, 255)" && imgChamps.alt == "seed") {
            imgChamps.src = "./assets/plant.svg";  
            imgChamps.alt = "plant"; 
    
            btnChamp.style.backgroundColor = "rgb(110, 24, 24)";
        }else if (currentColor === "rgb(8, 8, 61)" && getComputedStyle(btnChamp).backgroundColor === "rgb(0, 0, 255)" && imgChamps.alt == "plant") {
                imgChamps.src = "./assets/tree.svg";  
                imgChamps.alt = "tree"; 
                btnChamp.style.backgroundColor = "rgb(110, 24, 24)";
        }else if (currentColor === "rgb(8, 8, 61)" && getComputedStyle(btnChamp).backgroundColor === "rgb(0, 0, 255)" && imgChamps.alt == "tree") {
                imgChamps.src = "./assets/forest.svg";  
                imgChamps.alt = "forest"; 
                btnChamp.style.backgroundColor = "rgb(110, 24, 24)";
                btnChamp.disabled = true;
        }
    }
    
}, 10000);

for (let i = 0; i < btnChamps.length; i++) {
    const btnChamp = btnChamps[i];
    
        btnChamp.addEventListener("click", () => {
            const currentColor = getComputedStyle(body).backgroundColor;

            if (currentColor == "rgb(8, 8, 61)") {
                return;
            }

            const imgChamps = btnChamp.firstElementChild;

                if (imgChamps.src && imgChamps.alt == "") {
                    imgChamps.src = "./assets/seed.svg";
                    imgChamps.alt = "seed";
                }else if (imgChamps.alt !== "") {
                    btnChamp.style.backgroundColor = "blue";
                }else if (imgChamps.alt == "tree") {
                    btnChamp.disabled = true;
                }
        });
}