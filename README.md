# Ligaya Tech

A responsive implementation of the [Ligaya Tech Figma design](https://www.figma.com/design/DZiTZNZ9iBoi4AdjYUvIFp/MIDTERMLAB-INTROWEB?node-id=18-2), built with plain HTML, CSS, and JavaScript.

Open `index.html` in your browser. Keep `styles.css`, `script.js`, `images/`, and `assets/` beside it. There are no dependencies or build commands.

For a local web server, run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`. Served pages use the original Figma SVG masks. Direct file previews use matching rounded rectangular clipping because browsers restrict external SVG masks under `file://`.

The page includes the complete hero, technology logos, services, company overview, quote, impact statistics, solution panels, reasons to choose Ligaya Tech, approach cards, and footer. Desktop spacing scales from the original 2460 × 10500 frame; mobile layouts rearrange the content for smaller screens. All 65 used images and SVGs are in `images/`; unused image files have been removed. Images and fonts are local, and the used image contents are unchanged. Font licenses are included in `assets/fonts`.

`index.html` contains the content and semantic structure. `styles.css` contains the design and responsive layouts. `script.js` handles the mobile navigation, email validation, and policy dialogs.

Image assets use descriptive names such as `GoogleCloudLogo.jpg`, `OfficeTeam.jpg`, and `SecurityShield.png`. SVG icons, backgrounds, and masks also have descriptive names. Extensions match the actual file formats; the image contents are unchanged. `assets/figma-assets.json` maps the original Figma export names to the current filenames.

Before enabling business integrations:

- Set `CONTACT_EMAIL` near the top of `script.js` to the company's actual email. Until then, contact buttons scroll to the footer.
- Connect the newsletter form to your mailing service. It currently validates email addresses and states that signup is unavailable; no address is stored or sent.
- Replace the social platform homepage URLs with the company's profile URLs.
- Supply the privacy policy and terms of service. Their buttons currently show an unavailable notice.
- The footer's Projects link opens the solutions section because the supplied design does not include a separate projects page.

Browser checks passed at widths of 320, 390, 768, 1024, 1440, and 2460 pixels in Microsoft Edge. Checks cover page overflow, images, local fonts, mobile menu behavior, email validation, and dialog opening and closing. JavaScript syntax and internal fragment links were also checked. The desktop layout was visually compared with the Figma render.
