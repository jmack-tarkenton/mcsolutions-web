var pkg = require('./package.json');
var Greenlock = require('greenlock-express');

var dns01 = require('acme-dns-01-godaddy').create({
    baseUrl: 'https://api.godaddy.com/v1', // default
    key: process.env.GoDaddy_Key,
    secret: process.env.GoDaddy_Secret
});

var greenlock = Greenlock.init({
    packageRoot: __dirname,
    configDir: "./greenlock.d/",
    packageAgent: pkg.name + '/' + pkg.version,
    maintainerEmail: "josh.mccormick@mccormicksolutions.com",
    staging: true,
    notify: function (event, details) {
        if ('error' === event) {
            // `details` is an error object in this case
            console.error(details);
        }
    },
    proxy: {
        "local.host": "http://localhost:3000",
    },
    challenges: {
        "*.mccormicksolutions.com": dns01,
        "*local.host": {
            "module": require("acme-http-01-standalone")
        }
    }
});



const serverNames = ["mccormicksolutions.com", "local.host"];

// greenlock.manager
//     .defaults({
//         agreeToTerms: true,
//         subscriberEmail: 'josh.mccormick@mccormicksolutions.com'
//     })
//     .then(async function (fullConfig) {
//         // ...
//         console.log({ fullConfig });

//         serverNames.forEach(async (subject) => {
//             try {
//                 const site = await greenlock.get({ servername: subject });
//                 const { pems } = site;
//                 if (pems && pems.privkey && pems.cert && pems.chain) {
//                     console.info('Success');
//                 }
//                 console.log({ site, pems });
//             } catch (e) {

//                 console.error('Big bad error:', e.code);
//                 console.error(e);

//             }


//         })
//         // greenlock.get({ servername: subject })
//         // .then(function (pems) {
//         //     if (pems && pems.privkey && pems.cert && pems.chain) {
//         //         console.info('Success');
//         //     }
//         //     //console.log(pems);
//         // })
//         // .catch(function (e) {
//         //     console.error('Big bad error:', e.code);
//         //     console.error(e);
//         // });
//     });

module.exports = greenlock;

// greenlock.manager
//     .defaults({
//         agreeToTerms: true,
//         subscriberEmail: 'webhosting@example.com'
//     })
//     .then(function(fullConfig) {
//         // ...
//     });