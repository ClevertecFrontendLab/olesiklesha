/// <reference types="cypress" />

describe('App Component', () => {
    const resolutionFull = [
        { width: 360, height: 740 },
        { width: 833, height: 900 },
        { width: 1440, height: 900 },
    ];
    // const resolutionMobile = [{ width: 360, height: 740 }];
    // const resolutionTablet = [{ width: 833, height: 900 }];
    // const resolutionLaptop = [{ width: 1440, height: 900 }];
    const resolutionDesktop = [{ width: 1920, height: 1080 }];

    function takeScreenshots(screenshotName: string, resolution = resolutionFull) {
        cy.wait(1000);
        for (let i = 0; i < resolution.length; i++) {
            cy.viewport(resolution[i].width, resolution[i].height);
            cy.screenshot(`${screenshotName}_${resolution[i].width}x${resolution[i].height}`, {
                capture: 'viewport',
            });
        }
    }

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should take a screenshot of the app', () => {
        takeScreenshots('main-page', resolutionDesktop);
    });
});
