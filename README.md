# martensc.github.io
Personal portfolio site built with [Eleventy](https://www.11ty.dev/).

## Development
Start the local dev server (runs Prettier check first, then serves with live reload):
```bash
npm start
```
Start with encrypted work section:
```bash
npm run start:encrypted
```

## Build
Full production build (clean, build, encrypt work pages, sync to `encrypted/`):
```bash
npm run build
```
Build with Eleventy only (no clean or encrypt):
```bash
npm run build:eleventy
```
Clean output directories (`_site/` and `encrypted/`):
```bash
npm run clean
```

## Code Quality
Check CSS formatting with Prettier:
```bash
npm run prettier:check
```
Auto-fix CSS formatting with Prettier:
```bash
npm run prettier:fix
```

## Encryption
Encrypt the work portfolio pages with [StatiCrypt](https://github.com/robinmoisson/staticrypt):
```bash
npm run encrypt:work
```
Set the `STATICRYPT_PASSWORD` environment variable to override the default password.
