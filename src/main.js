import "./css/index.css"
import IMask from "imask"
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57f2"],
    mastercard: ["#DF6F29", "#C96347"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
setCardType("visa")

const cardNumber = document.querySelector("#card-number")
const expirationDate = document.querySelector("#expiration-date")
const securityCode = document.querySelector("#security-code")
/*const cardHolder = document.querySelector("#card-holder")*/

const cardNumberPattern = {
  mask: "0000 0000 0000 0000",
}

const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}
const securityCodePattern = {
  mask: "0000",
}
/*const cardHolderPattern = {
  mask: "",
  maxLength: 20,
}*/

const cardNumberMaked = IMask(cardNumber, cardNumberPattern)
const expirationDateMaked = IMask(expirationDate, expirationDatePattern)
const securityCodeMasked = IMask(securityCode, securityCodePattern)
//const cardHolderMasked = IMask(cardHolder, cardHolderPattern)
