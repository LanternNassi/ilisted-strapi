/**
 * landing-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::landing-page.landing-page', {
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
