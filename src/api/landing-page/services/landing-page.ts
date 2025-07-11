/**
 * landing-page service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::landing-page.landing-page', ({ strapi }) => ({
  // Custom service method to get landing pages with all media and relations
  async findWithMedia(params = {}) {
    const data = await strapi.entityService.findMany('api::landing-page.landing-page', {
      populate: {
        heroSection: {
          populate: {
            HeroBackground: {
              populate: '*'
            }
          }
        },
        WhyChooseUs: {
          populate: {
            heroImage: {
              populate: '*'
            },
            chooseUsActionPoints: {
              populate: '*'
            }
          }
        },
        BaliMarketNews: {
          populate: {
            News: {
              populate: {
                Headline_image: {
                  populate: '*'
                }
              }
            }
          }
        },
        FAQ: {
          populate: '*'
        }
      },
      publicationState: 'live',
      sort: { createdAt: 'desc' },
      ...params
    });

    return { data, meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: data.length } } };
  },

  // Custom service method to get a single landing page with all media and relations
  async findOneWithMedia(id, params = {}) {
    const data = await strapi.entityService.findOne('api::landing-page.landing-page', id, {
      populate: {
        heroSection: {
          populate: {
            HeroBackground: {
              populate: '*'
            }
          }
        },
        WhyChooseUs: {
          populate: {
            heroImage: {
              populate: '*'
            },
            chooseUsActionPoints: {
              populate: '*'
            }
          }
        },
        BaliMarketNews: {
          populate: {
            News: {
              populate: {
                Headline_image: {
                  populate: '*'
                }
              }
            }
          }
        },
        FAQ: {
          populate: '*'
        }
      },
      publicationState: 'live',
      ...params
    });

    return data;
  },

  // Alternative method with selective population (if you want more control)
  async findWithSelectiveMedia(params = {}) {
    const data = await strapi.entityService.findMany('api::landing-page.landing-page', {
      populate: {
        heroSection: {
          populate: '*'
        },
        WhyChooseUs: {
          populate: '*'
        },
        BaliMarketNews: {
          populate: '*'
        },
        FAQ: {
          populate: '*'
        },
        // Add any new sections here as you create them
        // newSection: {
        //   populate: '*'
        // }
      },
      publicationState: 'live',
      sort: { createdAt: 'desc' },
      ...params
    });

    return { data, meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: data.length } } };
  }
}));
