## Run the Eleventy Development Server
This is the primary command you'll use for local development. It builds your site, starts a local web server, and automatically reloads your browser when you make changes to your source files.
```bash
npx @11ty/eleventy --serve
```

##  Build the Site (no server)
If you just want to compile your site to the output directory (default `_site`) without starting a server:
```bash
npx @11ty/eleventy
```

## Build and Watch for Changes (no server)
If you want Eleventy to automatically rebuild your site whenever you save files, but you're using your own web server or just want the files to be updated:
```bash
npx @11ty/eleventy --watch
```

## Change the Port
If port 8080 is already in use, or you prefer a different port:
```bash
npx @11ty/eleventy --serve --port=8081
```

## Check Eleventy Version
```bash
npx @11ty/eleventy --version
```
