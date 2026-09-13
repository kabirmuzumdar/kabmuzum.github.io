# Kabir Muzumdar — Personal Portfolio

## Open the website

1. Extract the entire ZIP (on Windows, right-click → **Extract All**).
2. Open **index.html** in Chrome, Edge, Firefox, or Safari.
3. Open **START-HERE.html** for the editing guide.

No installation, terminal, build command, or internet connection is needed to view the site. External profile links require internet access. Enable JavaScript in your browser. Keep `index.html` next to the `assets` folder; opening the HTML from inside the ZIP will not load the supporting files correctly.

## Edit content

Open **assets/js/content.js** in a plain-text editor (such as VS Code or Notepad). Save your edits, then refresh `index.html`. All portfolio content is in this one file:

| Content | Property in content.js |
| --- | --- |
| Name, introduction, photo, contact links, CV | `profile` |
| Biography and leadership | `about` |
| Research experiences | `research` |
| Projects | `projects` |
| Skill groups | `skills` |
| Education, coursework, honors | `education` |

The top-level sections are Home, About, Research, Projects, Skills, Education, Contact, and Resume. Research and project descriptions appear directly on cards. There are no separate project pages or hidden detail panels.

## Add a project or research experience

Copy an existing object inside the `projects` or `research` array. Keep a comma between objects. The order in the file is the order on the website. Give each entry a unique lowercase `id` with hyphens instead of spaces.

This complete entry works in either array. The `role`, `organization`, `mentor`, `subtitle`, `dates`, and `location` fields are optional; add them when useful.

```js
{
  id: "my-new-project",
  title: "My New Project",
  summary: "A short description of the work and its purpose.",
  highlights: [
    "What I designed, built, or analyzed.",
    "A result or contribution I want to highlight."
  ],
  tags: ["MATLAB", "Finite Element Analysis"],
  images: [],
  links: []
},
```

For a research experience, you can also add:

```js
subtitle: "Full research title",
organization: "University or research group",
role: "Undergraduate Research Assistant",
mentor: "Mentor's name",
dates: "September 2026 – Present",
location: "Austin, TX",
```

To remove an entry, delete its entire `{ ... }` block. To reorder entries, move their entire blocks. Text fields accept plain text, not HTML.

## Add project and research images

1. Copy JPG, PNG, WebP, GIF, or SVG files into `assets/img/projects/` or `assets/img/research/`.
2. Use simple lowercase filenames with hyphens, for example `miura-model.png`. Avoid spaces; paths are case-sensitive when hosted.
3. In the matching entry in `content.js`, replace `images: []` with:

```js
images: [
  {
    src: "assets/img/projects/miura-model.png",
    alt: "Finite-element model of a folded Miura-ori metasurface",
    caption: "Parametric model in COMSOL Multiphysics.",
    fit: "contain"
  },
  {
    src: "assets/img/projects/miura-modes.png",
    alt: "First three vibration modes of the metasurface",
    caption: "Eigenfrequency analysis results.",
    fit: "contain"
  }
],
```

These paths are examples; add your actual files before using them. The first image spans the card; additional images appear in a small grid. Clicking an image opens the original file in a new tab. The `caption` is optional. Use descriptive `alt` text for accessibility.

- `fit: "contain"` shows the full image and is the default. Use it for engineering plots, screenshots, and diagrams.
- `fit: "cover"` crops to a consistent 16:10 shape. Use it for photos when cropping is acceptable.
- Leave `images: []` to show a clean text-only card. No placeholder image appears.

No project photographs or personal headshot were supplied, so the site currently uses text-only cards and a KM profile circle. The template's unrelated stock project images and someone else's portrait have been removed.

## Add your portrait

Save a photo to `assets/img/profile/kabir.jpg`, then set these fields in `profile`:

```js
photo: "assets/img/profile/kabir.jpg",
photoAlt: "Kabir Muzumdar",
```

Leave `photo: ""` to show your initials.

## Add a poster, paper, repository, or other link

Set the entry's `links` array. Links appear as ordinary text links on the card.

```js
links: [
  { label: "Repository", url: "https://github.com/k1llersw0rd/your-repository" },
  { label: "Poster (PDF)", url: "assets/documents/your-poster.pdf" }
],
```

Create `assets/documents/` and add your PDF if using the local example. Replace sample URLs with real destinations. Do not use local disk paths like `C:\\Users\\...`; all paths start relative to `index.html`.

## Replace the CV

The supplied August 2026 CV is included unchanged as **assets/resume/Kabir_Muzumdar_CV.pdf**. Both Resume buttons use it. To update it, replace this PDF with a new file using the same name, or update `profile.cv` in `content.js` to the new relative path.

The Research section contains the three experiences requested. The complete CV also retains your offshore ultrasonic inspection research and all other CV content. Updating the PDF does not automatically change the website text; edit `content.js` too when necessary.

## Use with your existing website repository

Copy `index.html`, `.nojekyll`, `robots.txt`, `LICENSE`, and the **entire assets folder** to the root of your existing website repository, replacing the old files. These files are ready for static hosting and use relative asset paths. Keep the repository's existing Git history and publishing settings. The ZIP intentionally contains no Git history.

`START-HERE.html` and `README.md` are editing guides; they do not need to be published. This package does not publish or change your live site.

## Troubleshooting

- **The main sections are blank after an edit:** undo the last change and check for a missing quote, comma, `]`, or `}` in `content.js`. Use straight quotes, not smart quotes. A quote inside a double-quoted string must be escaped as `\"`.
- **An image is missing:** check its filename, extension, letter case, and relative path. Missing images are hidden so a broken image does not spoil a card; the browser console reports the path.
- **Edits are not showing:** save the file and refresh. On a hosted site, try a hard refresh (Ctrl+Shift+R).
- **The site is unstyled:** extract the entire folder and keep the `assets` directory beside `index.html`.
- **The CV opens instead of downloading:** use the PDF viewer's download button or right-click Download CV and choose Save Link As. Browser PDF preferences can affect this behavior.

## Design and credits

The fixed sidebar, teal section banners, mint hero, card styling, background texture, and typing animation follow the supplied portfolio template. Layout rules and navigation are now local, with no CDN requirement. Colors and spacing are in `assets/css/style.css`; rendering and navigation are in `assets/js/main.js`.

Original portfolio template: Varad Bhogayata, MIT license (see `LICENSE`). Typed.js: Matt Boldt, MIT license (see `assets/vendor/typed.js/LICENSE`).
