# Contributing to KDEMOS

Thanks for your interest! [KDEMOS](https://kdemos.com) is a free, no-sign-up web app to find the day that works for everyone in a group. It is open source (MIT) and contributions of every size are welcome. Spanish or English, both are fine.

## Good first issues

The [good first issues](https://github.com/francordel/kdemos/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) are small, self-contained tasks. Each one names the files to change, what "done" looks like and how to test it.

1. Comment on the issue you want and it will be assigned to you.
2. Please take one issue at a time.
3. If you have not opened a PR after ~7 days the issue goes back to the pool.

We take part in **Hacktoberfest**: PRs that close an issue labelled `hacktoberfest` and get merged are labelled `hacktoberfest-accepted`.

## Development setup

Requires **Node.js 18+**.

```bash
git clone https://github.com/francordel/kdemos.git
cd kdemos
npm install
REACT_APP_DB_MODE=mock npm start
```

`REACT_APP_DB_MODE=mock` keeps everything in memory, so you do not need Firebase or Cloudflare credentials to work on the UI.

### Project layout

| Path | What lives there |
| --- | --- |
| `src/pages/` | Home and Calendar screens |
| `src/components/` | Header, Footer, Recommendation panel |
| `src/contexts/LanguageContext.js` | Spanish and English strings + language switching |
| `src/i18n/` | The other languages (one file each) and date-fns locales |
| `src/utils/` | Pure logic: recommendation, selections, calendar export |
| `src/services/` | Data layer: `mock`, `firebase`, `cloudflare` |
| `functions/api/` | Cloudflare Pages Functions (backend) |
| `scripts/generate-i18n-landings.mjs` | Static SEO landing pages per language |
| `kdemos_mobile_app/` | Flutter app (work in progress) |

### Tests

```bash
CI=true npm test -- --watchAll=false
npm run build
```

Both run in CI on every pull request and must pass.

## Pull requests

- Keep PRs small and focused on one issue. Write `Closes #<number>` in the description.
- Add or update tests when you change logic in `src/utils/` or `functions/`.
- If you add user-facing text, add the key to **every** language (English is fine as a placeholder in the ones you do not speak, and say so in the PR).
- Do not commit `.env` files, API keys or Firebase credentials.

## Adding a new language

1. Copy `src/i18n/de.js` to `src/i18n/<code>.js` and translate the values (keep the keys).
2. Import it and add it to `translations` in `src/contexts/LanguageContext.js`.
3. Add the date-fns locale to `DATE_LOCALES` and the native name to `LANGUAGE_NAMES` in `src/i18n/locales.js`.
4. Run the app, switch to the new language from the header and click around Home and a calendar.

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). Be kind.
