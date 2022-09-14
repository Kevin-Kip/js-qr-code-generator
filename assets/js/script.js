const wrapper = document.getElementById("wrapper");
const generateButton = document.getElementById("generate-button");
const textInput = document.getElementById("text");
const qrImage = document.getElementById("qr-code-image");

generateButton.addEventListener("click", () => {
    let qrValue = textInput.value
    if (!qrValue) return;

    generateButton.innerText = "Generating QR Code ..."

    let cleanText = qrValue.replaceAll(" ", "%20")
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${cleanText}`

    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateButton.innerText = "Generate QR Code"
    })
})

textInput.addEventListener("keyup", () => {
    if (!textInput.value) {
        wrapper.classList.remove("active")
    }
})