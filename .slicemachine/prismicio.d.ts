// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.description[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    description: prismicT.GroupField<Simplify<AboutDocumentDataDescriptionItem>>;
    /**
     * Slice Zone field in *About*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: about.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<AboutDocumentDataSlicesSlice>;
    /**
     * Clients - Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.client_title
     * - **Tab**: Clients
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    client_title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *About*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: about.slices1[]
     * - **Tab**: Clients
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices1: prismicT.SliceZone<AboutDocumentDataSlices1Slice>;
    /**
     * Awards - Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.award_title
     * - **Tab**: Awards
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    award_title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *About*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: about.slices2[]
     * - **Tab**: Awards
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices2: prismicT.SliceZone<AboutDocumentDataSlices2Slice>;
}
/**
 * Item in About → Description
 *
 */
export interface AboutDocumentDataDescriptionItem {
    /**
     * Title field in *About → Description*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.description[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Text field in *About → Description*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.description[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Slice for *About → Slice Zone*
 *
 */
type AboutDocumentDataSlicesSlice = ProfileSlice;
/**
 * Slice for *About → Slice Zone*
 *
 */
type AboutDocumentDataSlices1Slice = ProfileSlice;
/**
 * Slice for *About → Slice Zone*
 *
 */
type AboutDocumentDataSlices2Slice = ProfileSlice;
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Contact documents */
interface ContactDocumentData {
    /**
     * Paragraph field in *Contact*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.paragraph
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    paragraph: prismicT.KeyTextField;
    /**
     * Info 1 field in *Contact*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    info_1: prismicT.GroupField<Simplify<ContactDocumentDataInfo1Item>>;
    /**
     * Info 2 field in *Contact*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    info_2: prismicT.GroupField<Simplify<ContactDocumentDataInfo2Item>>;
    /**
     * Email field in *Contact*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.email
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
}
/**
 * Item in Contact → Info 1
 *
 */
export interface ContactDocumentDataInfo1Item {
    /**
     * Name field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Social 1 field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].social_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_1: prismicT.KeyTextField;
    /**
     * Social 1 Link field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].social_1_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_1_link: prismicT.KeyTextField;
    /**
     * Social 2 field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].social_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_2: prismicT.KeyTextField;
    /**
     * Social 2 Link field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].social_2_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_2_link: prismicT.KeyTextField;
    /**
     * Phone field in *Contact → Info 1*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_1[].phone
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone: prismicT.KeyTextField;
}
/**
 * Item in Contact → Info 2
 *
 */
export interface ContactDocumentDataInfo2Item {
    /**
     * Name field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Social 1 field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].social_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_1: prismicT.KeyTextField;
    /**
     * Social 1 Link field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].social_1_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_1_link: prismicT.KeyTextField;
    /**
     * Social 2 field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].social_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_2: prismicT.KeyTextField;
    /**
     * Social 2 Link field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].social_2_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    social_2_link: prismicT.KeyTextField;
    /**
     * Phone field in *Contact → Info 2*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.info_2[].phone
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone: prismicT.KeyTextField;
}
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContactDocumentData>, "contact", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * First Name field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.first_name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    first_name: prismicT.KeyTextField;
    /**
     * Second Name field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.second_name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    second_name: prismicT.KeyTextField;
    /**
     * First Paragraph field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.first_paragraph
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    first_paragraph: prismicT.KeyTextField;
    /**
     * Second Paragraph field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.second_paragraph
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    second_paragraph: prismicT.KeyTextField;
    /**
     * Third Paragraph field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.third_paragraph
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    third_paragraph: prismicT.KeyTextField;
    /**
     * First Button field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.first_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    first_button: prismicT.KeyTextField;
    /**
     * Second Button field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.second_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    second_button: prismicT.KeyTextField;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Title field in *Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Work Title field in *Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.work_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    work_title: prismicT.KeyTextField;
    /**
     * About Title field in *Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.about_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    about_title: prismicT.KeyTextField;
    /**
     * Contact Title field in *Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.contact_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    contact_title: prismicT.KeyTextField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Order documents */
interface OrderDocumentData {
    /**
     * List Order field in *Order*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: order.list_order[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    list_order: prismicT.GroupField<Simplify<OrderDocumentDataListOrderItem>>;
}
/**
 * Item in Order → List Order
 *
 */
export interface OrderDocumentDataListOrderItem {
    /**
     * Project field in *Order → List Order*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: order.list_order[].project
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project: prismicT.RelationField;
}
/**
 * Order document from Prismic
 *
 * - **API ID**: `order`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OrderDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<OrderDocumentData>, "order", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Client field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.client
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    client: prismicT.KeyTextField;
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Agency field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.agency
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    agency: prismicT.KeyTextField;
    /**
     * Cover field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.cover
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cover: prismicT.ImageField<never>;
    /**
     * Crew field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.crew[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    crew: prismicT.GroupField<Simplify<ProjectDocumentDataCrewItem>>;
    /**
     * Banner Title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.banner_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    banner_title: prismicT.KeyTextField;
    /**
     * Banner Description field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.banner_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    banner_description: prismicT.KeyTextField;
    /**
     * Numbers field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.numbers[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    numbers: prismicT.GroupField<Simplify<ProjectDocumentDataNumbersItem>>;
    /**
     * Content field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<ProjectDocumentDataContentItem>>;
}
/**
 * Item in Project → Crew
 *
 */
export interface ProjectDocumentDataCrewItem {
    /**
     * Title field in *Project → Crew*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.crew[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Name field in *Project → Crew*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.crew[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
}
/**
 * Item in Project → Numbers
 *
 */
export interface ProjectDocumentDataNumbersItem {
    /**
     * Title field in *Project → Numbers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.numbers[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Project → Numbers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.numbers[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Item in Project → Content
 *
 */
export interface ProjectDocumentDataContentItem {
    /**
     * Description field in *Project → Content*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Video field in *Project → Content*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content[].video
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    video: prismicT.EmbedField;
    /**
     * Image field in *Project → Content*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Size field in *Project → Content*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Image size
     * - **API ID Path**: project.content[].size
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    size: prismicT.SelectField<"1-big" | "2-medium-medium" | "3-medium_ss" | "3-m_small_s" | "3-ms_small" | "4-small_sm" | "4-s_small_m" | "4-ss_medium">;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
export type AllDocumentTypes = AboutDocument | ContactDocument | HomeDocument | NavigationDocument | OrderDocument | ProjectDocument;
/**
 * Primary content in Profile → Primary
 *
 */
interface ProfileSliceDefaultPrimary {
    /**
     * Title field in *Profile → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: profile.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Profile → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: profile.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Profile Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ProfileSliceDefaultPrimary>, never>;
/**
 * Primary content in Profile → Primary
 *
 */
interface ProfileSliceProfilePrimary {
    /**
     * Name field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Last Name field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.last_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    last_name: prismicT.KeyTextField;
    /**
     * Role field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.role
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    role: prismicT.KeyTextField;
    /**
     * Image field in *Profile → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Profile variation for Profile Slice
 *
 * - **API ID**: `profile`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSliceProfile = prismicT.SharedSliceVariation<"profile", Simplify<ProfileSliceProfilePrimary>, never>;
/**
 * Primary content in Profile → Primary
 *
 */
interface ProfileSliceAccomplishmentsPrimary {
    /**
     * Topic field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.topic
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    topic: prismicT.KeyTextField;
}
/**
 * Item in Profile → Items
 *
 */
export interface ProfileSliceAccomplishmentsItem {
    /**
     * Item field in *Profile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].item
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    item: prismicT.KeyTextField;
    /**
     * Link field in *Profile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link: prismicT.KeyTextField;
    /**
     * Sub Item field in *Profile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].sub_item
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_item: prismicT.KeyTextField;
}
/**
 * Accomplishments variation for Profile Slice
 *
 * - **API ID**: `accomplishments`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSliceAccomplishments = prismicT.SharedSliceVariation<"accomplishments", Simplify<ProfileSliceAccomplishmentsPrimary>, Simplify<ProfileSliceAccomplishmentsItem>>;
/**
 * Primary content in Profile → Primary
 *
 */
interface ProfileSliceIndustryClientsPrimary {
    /**
     * Topic field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.topic
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    topic: prismicT.KeyTextField;
}
/**
 * Item in Profile → Items
 *
 */
export interface ProfileSliceIndustryClientsItem {
    /**
     * Logo field in *Profile → Items*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    logo: prismicT.LinkToMediaField;
}
/**
 * Industry Clients variation for Profile Slice
 *
 * - **API ID**: `industryClients`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSliceIndustryClients = prismicT.SharedSliceVariation<"industryClients", Simplify<ProfileSliceIndustryClientsPrimary>, Simplify<ProfileSliceIndustryClientsItem>>;
/**
 * Primary content in Profile → Primary
 *
 */
interface ProfileSliceAwardCategoriesPrimary {
    /**
     * Award field in *Profile → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.primary.award
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    award: prismicT.KeyTextField;
}
/**
 * Item in Profile → Items
 *
 */
export interface ProfileSliceAwardCategoriesItem {
    /**
     * Title field in *Profile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Sub Title field in *Profile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.items[].sub_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_title: prismicT.KeyTextField;
}
/**
 * Award Categories variation for Profile Slice
 *
 * - **API ID**: `awardCategories`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSliceAwardCategories = prismicT.SharedSliceVariation<"awardCategories", Simplify<ProfileSliceAwardCategoriesPrimary>, Simplify<ProfileSliceAwardCategoriesItem>>;
/**
 * Slice variation for *Profile*
 *
 */
type ProfileSliceVariation = ProfileSliceDefault | ProfileSliceProfile | ProfileSliceAccomplishments | ProfileSliceIndustryClients | ProfileSliceAwardCategories;
/**
 * Profile Shared Slice
 *
 * - **API ID**: `profile`
 * - **Description**: `Profile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProfileSlice = prismicT.SharedSlice<"profile", ProfileSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocumentDataDescriptionItem, AboutDocumentDataSlicesSlice, AboutDocumentDataSlices1Slice, AboutDocumentDataSlices2Slice, AboutDocument, ContactDocumentData, ContactDocumentDataInfo1Item, ContactDocumentDataInfo2Item, ContactDocument, HomeDocumentData, HomeDocument, NavigationDocumentData, NavigationDocument, OrderDocumentData, OrderDocumentDataListOrderItem, OrderDocument, ProjectDocumentData, ProjectDocumentDataCrewItem, ProjectDocumentDataNumbersItem, ProjectDocumentDataContentItem, ProjectDocument, AllDocumentTypes, ProfileSliceDefaultPrimary, ProfileSliceDefault, ProfileSliceProfilePrimary, ProfileSliceProfile, ProfileSliceAccomplishmentsPrimary, ProfileSliceAccomplishmentsItem, ProfileSliceAccomplishments, ProfileSliceIndustryClientsPrimary, ProfileSliceIndustryClientsItem, ProfileSliceIndustryClients, ProfileSliceAwardCategoriesPrimary, ProfileSliceAwardCategoriesItem, ProfileSliceAwardCategories, ProfileSliceVariation, ProfileSlice };
    }
}
