# gatsby-plugin-autopilot

Gatsby plugin for adding Autopilot tracking script to your Gatsby site.

## Install

```bash
yarn add gatsby-plugin-autopilot
```

## How to use

```js
// In your gatsby-config.js

{
      resolve: `gatsby-plugin-autopilot`, // gatsby-plugin-autopilot
      options: {
        apiUrl: "", // Your unique api URL, found in your tracking code settings in your Autopilot dashboard.
        trackingId: "", // Your unique tracking ID, also found in your tracking code settings.
        app: true, // true/false
        exclude: [], // an array of url paths to exclude from using the Autopilot script. e.g. ['/signup', '/about']
      },
    },
```
