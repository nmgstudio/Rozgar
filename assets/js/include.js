// Simple HTML include logic for header/footer (call from every page)
function includeHTML() {
  const includeElems = document.querySelectorAll('[data-include]');
  includeElems.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    if (file) {
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
        if (file.includes('footer')) updateFooterInfo();
        // Optional: call search JS if header
        if (file.includes('header')) loadSearchLogic();
      }
    }
  });
}
// Footer dynamic info
function updateFooterInfo() {
  const now = new Date();
  // Simulate visitor count for demo
  function formatVisitorCount(date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear().toString().slice(2);
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${y}${m}${d}${h}${min}`;
  }
  const count = formatVisitorCount(now);
  const updatedDate = now.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric"
  });
  const v = document.getElementById("visitor-count");
  if (v) v.innerText = `Visitor Count: ${count}`;
  const l = document.getElementById("last-updated");
  if (l) l.innerText = `Last Updated: ${updatedDate}`;
}
// Load search logic if needed (dummy for demo)
function loadSearchLogic() {
  if (typeof setupSearchBar === 'function') setupSearchBar();
}
document.addEventListener('DOMContentLoaded', includeHTML);

window.addEventListener('DOMContentLoaded', (event) => {
    // URL से पैरामीटर लेने की कोशिश करें
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const regNum = urlParams.get('regNum');

    // अगर नाम और रजिस्ट्रेशन नंबर मौजूद है
    if (name && regNum) {
        // उस एलिमेंट को ढूंढें जहाँ आप यह जानकारी दिखाना चाहते हैं
        // आपको अपनी वेबसाइट के HTML के अनुसार सही सेलेक्टर डालना होगा
        const userInfoElement = document.querySelector('#top-header-user-info'); // उदाहरण सेलेक्टर

        if (userInfoElement) {
            userInfoElement.textContent = `${name} | ${regNum}`;
        }
        
        // लोकल स्टोरेज में सेव करें ताकि पेज रीलोड होने पर भी जानकारी बनी रहे
        localStorage.setItem('userName', name);
        localStorage.setItem('userRegNum', regNum);

    } else {
        // अगर URL में नहीं है, तो लोकल स्टोरेज से लेने की कोशिश करें
        const storedName = localStorage.getItem('userName');
        const storedRegNum = localStorage.getItem('userRegNum');
        if (storedName && storedRegNum) {
             const userInfoElement = document.querySelector('#top-header-user-info'); // उदाहरण सेलेक्टर
             if (userInfoElement) {
                userInfoElement.textContent = `${storedName} | ${storedRegNum}`;
            }
        }
    }
});
