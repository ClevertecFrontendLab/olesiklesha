// const browserWidth = 1920;
// const browserHeight = 1024;

module.exports = {
    video: false,
    e2e: {
        baseUrl: 'http://localhost:3000',
        video: false,
        supportFile: 'cypress/support/component.ts',
        screenshotsFolder: 'cypress/report/screenshots',
        reporter: 'mochawesome',
        reporterOptions: {
            html: false,
            json: true,
            reportDir: 'cypress/report',
            reportFilename: 'report',
            overwrite: true,
        },
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },
};
