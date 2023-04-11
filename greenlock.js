const path = require('path');
const pkg = require('./package.json');
const Greenlock = require('greenlock');

const ACME_SERVER_URL = 'https://acme-v02.api.letsencrypt.org/directory'; // Use this URL for production

const DOMAIN_NAME = 'mccormicksolutions.com';

const greenlock = Greenlock.create({
    version: 'draft-12',
    server: ACME_SERVER_URL,
    packageRoot: __dirname,
    configDir: "./greenlock.d/",
    packageAgent: pkg.name + '/' + pkg.version,
    maintainerEmail: "josh.mccormick@mccormicksolutions.com",
   
    notify: function (event, details) {
        if ('error' === event) {
            // `details` is an error object in this case
            console.error(details);
        }
    },
    // store: require('greenlock-store-fs'),
    approveDomains: (opts, certs, cb) => {
        cb(null, {
            options: opts,
            certs: certs
        });
    },
    staging: false,
    debug: false
});

// greenlock.manager.defaults({
//     subscriberEmail: 'josh.mccormick@mccormicksolutions.com',
//     agreeToTerms: true,
//     // store: require('greenlock-store-fs'),
//     challenges: {
//         // 'http-01': require('le-challenge-fs').create({
//         //     webrootPath: '/tmp/acme-challenges'
//         // }),
//         "http-01": {
//             module: "acme-http-01-webroot",
//             webroot: "/path/to/webroot"
//           }
//     }
// })
//     .then(async function (fullConfig) {
//         // ...
//         console.log({ fullConfig });



//     })
//     .catch(err => console.error({ err }));

(async () => {
    try {
        const site = await greenlock.get({ servername: DOMAIN_NAME });
        console.log({ site });
        const { pems } = site;
        console.log({ site, pems });
        if (pems && pems.privkey && pems.cert && pems.chain) {
            console.info('Success');
            console.info({ 'cert': pems.cert, key: pems.privkey })
        }
    } catch (e) {

        console.error('Big bad error:', e.code);
        console.error(e);

    }
})();