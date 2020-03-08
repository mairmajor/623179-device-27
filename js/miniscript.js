var link = document.querySelector(".appointment-link"),
    popup = document.querySelector(".appointment"),
    close = popup.querySelector(".modal-close"),
    form = popup.querySelector("form"),
    name = popup.querySelector("[name=name]"),
    email = popup.querySelector("[name=email]"),
    isStorageSupport = !0,
    storage = "";
try { storage = localStorage.getItem("appointment") } catch (err) { isStorageSupport = !1 }
link.addEventListener("click", function(a) { a.preventDefault(), popup.classList.add("modal-show"), storage ? (name.value = storage, email.focus()) : name.focus() }), close.addEventListener("click", function(a) { a.preventDefault(), popup.classList.remove("modal-show"), popup.classList.remove("modal-error") }), form.addEventListener("submit", function(a) { name.value && email.value ? isStorageSupport && localStorage.setItem("name", name.value) : (a.preventDefault(), popup.classList.remove("modal-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("modal-error")) }), window.addEventListener("keydown", function(a) { 27 === a.keyCode && (a.preventDefault(), popup.classList.contains("modal-show") && (popup.classList.remove("modal-show"), popup.classList.remove("modal-error"))) });
var mapLink = document.querySelector(".map-link"),
    mapPopup = document.querySelector(".map"),
    mapClose = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function(a) { a.preventDefault(), mapPopup.classList.add("modal-show") }), mapClose.addEventListener("click", function(a) { a.preventDefault(), mapPopup.classList.remove("modal-show") }), window.addEventListener("keydown", function(a) { 27 === a.keyCode && (a.preventDefault(), mapPopup.classList.contains("modal-show") && mapPopup.classList.remove("modal-show")) });