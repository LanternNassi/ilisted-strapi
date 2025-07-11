"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/landing-pages/with-media',
            handler: 'landing-page.findWithMedia',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/landing-pages/:id/with-media',
            handler: 'landing-page.findOneWithMedia',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/landing-pages/with-selective-media',
            handler: 'landing-page.findWithSelectiveMedia',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};
