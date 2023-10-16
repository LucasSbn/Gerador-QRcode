const container = document.querySelector(".section-into")
const qrcodeBtn = document.querySelector(".btn-gerar button")
const qrCodeInput = document.querySelector(".input-qrcode input")
const qrCodeImg = document.querySelector(".qrcode-img img")

function gerarQrCode () {
    const qrCodeInputValue = qrCodeInput.value

    
    if (!qrCodeInputValue) return;

    qrcodeBtn.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
    })

    qrcodeBtn.innerText = "Gerar outro código."

}

qrcodeBtn.addEventListener("click", () => {
    gerarQrCode();
})