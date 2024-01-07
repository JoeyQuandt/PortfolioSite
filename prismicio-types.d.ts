// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *layout → Social Icons*
 */
export interface LayoutDocumentDataSocialIconsItem {
  /**
   * social_icon_type field in *layout → Social Icons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: github
   * - **API ID Path**: layout.social_icons[].social_icon_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social_icon_type: prismic.SelectField<'github' | 'linkedin' | 'email', 'filled'>;

  /**
   * link field in *layout → Social Icons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.social_icons[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *layout → Contact Form*
 */
export interface LayoutDocumentDataContactFormItem {
  /**
   * name field in *layout → Contact Form*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_form[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * email field in *layout → Contact Form*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_form[].email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * message field in *layout → Contact Form*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_form[].message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message: prismic.KeyTextField;

  /**
   * button field in *layout → Contact Form*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_form[].button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Content for layout documents
 */
interface LayoutDocumentData {
  /**
   * Logo Title field in *layout*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Logo Title
   * - **API ID Path**: layout.logo_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo_title: prismic.KeyTextField;

  /**
   * Social Icons field in *layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.social_icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_icons: prismic.GroupField<Simplify<LayoutDocumentDataSocialIconsItem>>;

  /**
   * Contact Title field in *layout*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_title: prismic.KeyTextField;

  /**
   * Contact Text field in *layout*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_text: prismic.RichTextField;

  /**
   * Contact Form field in *layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.contact_form[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact_form: prismic.GroupField<Simplify<LayoutDocumentDataContactFormItem>>;
}

/**
 * layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<LayoutDocumentData>,
  'layout',
  Lang
>;

type PageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<PageDocumentData>,
  'page',
  Lang
>;

export type AllDocumentTypes = LayoutDocument | PageDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  'imageRight',
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataSocialIconsItem,
      LayoutDocumentDataContactFormItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
    };
  }
}
