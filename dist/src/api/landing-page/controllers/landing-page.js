"use strict";
/**
 * landing-page controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
    // Custom method to get landing pages with all media and relations
    async findWithMedia(ctx) {
        try {
            const { data, meta } = await strapi.service('api::landing-page.landing-page').findWithMedia(ctx.query);
            return ctx.send({
                data,
                meta
            });
        }
        catch (error) {
            return ctx.badRequest('Error fetching landing pages', { error: error.message });
        }
    },
    // Custom method to get a single landing page with all media and relations
    async findOneWithMedia(ctx) {
        try {
            const { id } = ctx.params;
            const data = await strapi.service('api::landing-page.landing-page').findOneWithMedia(id, ctx.query);
            if (!data) {
                return ctx.notFound('Landing page not found');
            }
            return ctx.send({
                data
            });
        }
        catch (error) {
            return ctx.badRequest('Error fetching landing page', { error: error.message });
        }
    },
    // Custom method to get landing pages with selective media population
    async findWithSelectiveMedia(ctx) {
        try {
            const { data, meta } = await strapi.service('api::landing-page.landing-page').findWithSelectiveMedia(ctx.query);
            return ctx.send({
                data,
                meta
            });
        }
        catch (error) {
            return ctx.badRequest('Error fetching landing pages', { error: error.message });
        }
    }
}));
