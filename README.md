# IMDb quicklist

IMDb quicklist is a handy tool to make it easier to decide what movie you'll watch first.

## Getting started:

First, run `npm` to install necessary depencies.

While in development mode, we'll use [brunch](http://brunch.io):

```shell
brunch watch -s
```

This will get a server running on port 3333.

Brunch will join every script and stylesheet together, monify them and place everything in `public/`. See `config.js` for more information in this procedure.

The `app.js` is the production static server and also the thumbnail fetcher.

To launch the main application, you'll need an environment file. Duplicate the `example.env`, rename it to `.env` and customize it.
