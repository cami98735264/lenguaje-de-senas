// Crea una expresión regular que identifique los caracteres dentro y fuera de las comillas "" y ''
const input = document.getElementById("lds-input");
const cont = document.getElementById("sign-image-container");
const img = document.getElementById("main-img")
const wait = time => new Promise((resolve) => setTimeout(resolve, time));


function isGifAnimated (uint8) {
    let duration = 0
    for (let i = 0, len = uint8.length; i < len; i++) {
      if (uint8[i] == 0x21
        && uint8[i + 1] == 0xF9
        && uint8[i + 2] == 0x04
        && uint8[i + 7] == 0x00) 
      {
        const delay = (uint8[i + 5] << 8) | (uint8[i + 4] & 0xFF)
        duration += delay < 2 ? 10 : delay
      }
    }
    return duration / 100
  }
const onSubmit = async (event) => {
    event.preventDefault();
    const inputText = input.value;
    if(!inputText) return window.alert("Por favor, ingresa un texto");
    const request = await fetch(`http://localhost:5001/translate?text=${inputText}`).then(response => response.json()).catch(err => null);
    if(!request) window.alert("El servidor no está disponible por el momento");
    else if(!request.success) window.alert("Ha ocurrido un error, por favor replantea la oración que proporcionaste");
    else {
        window.alert(request.message.map(word => word.value).join(" "));
        for(const word of request.message) {
            if(word.tag === "word") {
                img.src = "./public/" + word.value + ".gif";
                await wait(1000);
            }
            else if(word.tag === "quoted_phrase") {
                for(const letter of word.value.toLowerCase().replace(/['"]+/g, '').replace(/\s/g, '')) {
                    img.src = `https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/${letter}.gif`;
                    await wait(1000);
                }
            }
        }
    }
}