# Garment Textile Pvt Ltd - Job Notification Website

A professional, accessible, and responsive multi-page job notification website for Garment Textile Pvt Ltd, built with **HTML5, CSS3, and vanilla JavaScript** (no frameworks).

---

## 📁 Folder Structure

```
/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── include.js
│   │   └── search.js
│   ├── images/
│   │   └── company-logo.png
│   └── docs/         # (for policy, archive, etc. documents)
├── pages/
│   ├── index.html
│   ├── login.html
│   ├── register/
│   │   ├── step1.html
│   │   ├── step2.html
│   │   ├── step3.html
│   │   ├── step4.html
│   ├── application-form.html
│   ├── feedback.html
│   ├── old-website.html
│   ├── marquee-message.html
│   ├── for-candidates.html
│   ├── tender.html
│   ├── rti.html
│   ├── about.html
│   ├── archives.html
│   ├── disclaimer.html
│   ├── sitemap.html
│   ├── help.html
│   ├── policies.html
│   └── web-info-manager.html
│
├── partials/
│   ├── header.html
│   └── footer.html
│
└── README.md
```

---

## 🌐 Features

- Consistent header/footer via HTML includes (JavaScript in `/assets/js/include.js`)
- Responsive navigation and layout (`/assets/css/style.css`)
- Accessible forms (ARIA, alt text, semantic HTML)
- Mobile-friendly with media queries
- Homepage job search & filter (location/type/date, JS in `/assets/js/search.js`)
- Marquee for important news/messages
- All forms designed for Firebase Auth/Firestore/Drive integration
- Dynamic visitor count & last updated (JS in footer)

---

## 🔗 Useful Links in Footer

- Archives, Disclaimer, Sitemap, Help, Policies, Web Information Manager

---

## 🔧 How to Use

1. **Open `pages/index.html` in browser** (all navigation and includes are relative to `/pages/`)
2. To develop locally, use a static file server to enable JavaScript includes (`python -m http.server`, VS Code Live Server, etc.)
3. Add/update content in `/pages/` as needed.

---

## 📝 Customization

- **Logo**: Replace `/assets/images/company-logo.png` with your logo.
- **Footer Address**: Update address in `/partials/footer.html`.
- **Colors/Fonts**: Change in `/assets/css/style.css`.

---

## 🚦 Accessibility

- All images have `alt` text
- Navigation is semantic and keyboard-friendly
- Forms use ARIA and native form controls

---

## 📱 Responsive Design

- Mobile menu collapses into hamburger icon at small widths
- Forms and content scale for all devices

---

## 💻 No frameworks, only plain HTML, CSS, and JS

---

## 🏁 Ready for Firebase integration

- Login/Register forms use `email` and `password` fields
- Application form uses file upload (PDF/Image)
- JavaScript for form handling is modular and ready for Firebase logic

---

## 🔒 Production Ready

- Clean, modular code and file structure
- All pages accessible and linked via nav and footer

---

## 👥 Credits

Garment Textile Pvt Ltd Design by [Your Name/Team].
