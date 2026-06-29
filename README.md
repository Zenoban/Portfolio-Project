# Imtithal Aliyu — Student Portfolio

A personal portfolio website for Imtithal Aliyu, a cybersecurity student at MIVA Open University with a focus on ethical hacking and penetration testing.

## Pages

- **Home** (`index.html`) — Hero section, bio summary, featured projects
- **About** (`about.html`) — Full bio, education timeline, career aspirations, technical skills, hobbies
- **Projects** (`projects.html`) — Security project showcase (network assessment, SQL injection lab, port scanner, CTF challenges)
- **Planner** (`planner.html`) — Interactive academic task manager with weekly study schedule
- **Contact** (`contact.html`) — Contact details and a client-side validated contact form

## Structure

```
├── index.html          # Landing page
├── about.html          # About me
├── projects.html       # Project portfolio
├── planner.html        # Task planner (interactive)
├── contact.html        # Contact form
├── css/
│   └── style.css       # All styles
├── js/
│   ├── main.js         # Shared navigation/mobile menu
│   ├── planner.js      # Task planner logic (localStorage)
│   └── contact.js      # Form validation
└── assets/
    └── profile.jpg     # Profile photo
```

## Features

- Responsive design with floating navigation
- Dark/light announcement bar
- Scroll-triggered fade-in animations
- Interactive task planner with localStorage persistence
- Client-side form validation
- Weekly study schedule table

## Usage

Open any `.html` file in a browser. No build step or server required.
