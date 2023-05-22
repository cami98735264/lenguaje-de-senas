// Crea una expresión regular que identifique los caracteres dentro y fuera de las comillas "" y ''
const input = document.getElementById("lds-input");
const cont = document.getElementById("sign-image-container");
const oldImg = document.createElement("img");
oldImg.id = "lds-img";
oldImg.src = "./public/default-img.png";
oldImg.alt = "Imagen de la palabra en LSM";
cont.appendChild(oldImg);
const h5 = document.createElement("h5");
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

const onSubmit = async (event) => {
    event.preventDefault();
    const inputText = input.value;
    const request = await fetch(`http://localhost:5000/translate?text=${inputText}`).then(response => response.json());
    console.log(request);
    if(!inputText) return window.alert("Por favor, ingresa un texto.");
    window.alert(request.message.map(word => word.value).join(" "));
    for(const word of request.message) {
        if(word.tag === "word") {
            h5.innerText = word.value;
            cont.children[0].replaceWith(h5);
            await wait(1000);
        }
        else if(word.tag === "quoted_phrase") {
            cont.children[0].replaceWith(oldImg)
            // Make it so it removes every "" and '' and spaces from string
            for(const letter of word.value.toLowerCase().replace(/['"]+/g, '').replace(/\s/g, '')) {
                oldImg.src = `https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/${letter}.gif`;
                await wait(1000);
            }
        }
    }
}