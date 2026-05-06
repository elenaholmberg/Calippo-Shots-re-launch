// -------------------------------------------- //
// --------------- CONSTANTS ------------------ //
// -------------------------------------------- //

const COOKIE_STORAGE_KEY = "cookies"

// -------------------------------------------- //
// -------------- DOM REFERENCES -------------- //
// -------------------------------------------- //

console.log("cookies.js loaded")

const dialog = document.querySelector("#cookies")
const acceptBtn = document.querySelector("[data-cookie-accept]")
const rejectBtn = document.querySelector("[data-cookie-reject]")
const customizeBtn = document.querySelector("[data-cookie-customize]")

console.log({
	dialog,
	acceptBtn,
	rejectBtn,
	customizeBtn,
})

// -------------------------------------------- //
// ---------------- HELPERS ------------------- //
// -------------------------------------------- //

function saveConsent(value) {
	localStorage.setItem(COOKIE_STORAGE_KEY, value)
}

function getConsent() {
	return localStorage.getItem(COOKIE_STORAGE_KEY)
}

// -------------------------------------------- //
// ----------------- INIT --------------------- //
// -------------------------------------------- //

function initCookieDialog() {
	if (!dialog) return

	const saved = getConsent()

	if (!saved) {
		dialog.showModal()
	}
}

// -------------------------------------------- //
// ---------------- EVENTS -------------------- //
// -------------------------------------------- //

acceptBtn?.addEventListener("click", () => {
	saveConsent("accepted")
	dialog.close()
})

rejectBtn?.addEventListener("click", () => {
	saveConsent("rejected")
	dialog.close()
})

customizeBtn?.addEventListener("click", () => {
	saveConsent("customized")
	dialog.close()
})

// -------------------------------------------- //
// ------------ FIRE IT UP ^_^ ---------------- //
// -------------------------------------------- //

initCookieDialog()
