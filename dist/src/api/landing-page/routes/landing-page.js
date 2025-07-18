"use strict";
/**
 * landing-page router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::landing-page.landing-page', {
    config: {
        find: {
            auth: false,
        },
        findOne: {
            auth: false,
        },
    },
    only: ['find', 'findOne'],
    except: [],
});
