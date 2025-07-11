import type { Schema, Struct } from '@strapi/strapi';

export interface BloggingFaq extends Struct.ComponentSchema {
  collectionName: 'components_blogging_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'oneToOne';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.String;
  };
}

export interface BloggingMarketNews extends Struct.ComponentSchema {
  collectionName: 'components_blogging_market_news';
  info: {
    displayName: 'Market News';
    icon: 'slideshow';
  };
  attributes: {
    Area: Schema.Attribute.String;
    Headline_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsBaliMarketNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_bali_market_news_sections';
  info: {
    displayName: 'Bali Market News Section';
    icon: 'microphone';
  };
  attributes: {
    News: Schema.Attribute.Component<'blogging.market-news', true>;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_choose_us_sections';
  info: {
    displayName: 'ChooseUsSection';
    icon: 'link';
  };
  attributes: {
    chooseUsActionPoints: Schema.Attribute.Component<
      'vituals.choose-us-points',
      true
    >;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'dashboard';
  };
  attributes: {
    HeroBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface VitualsChooseUsPoints extends Struct.ComponentSchema {
  collectionName: 'components_vituals_choose_us_points';
  info: {
    displayName: 'Choose us Points';
    icon: 'bulletList';
  };
  attributes: {
    body: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blogging.faq': BloggingFaq;
      'blogging.market-news': BloggingMarketNews;
      'sections.bali-market-news-section': SectionsBaliMarketNewsSection;
      'sections.choose-us-section': SectionsChooseUsSection;
      'sections.hero-section': SectionsHeroSection;
      'vituals.choose-us-points': VitualsChooseUsPoints;
    }
  }
}
