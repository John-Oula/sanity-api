// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import footerMenu from './footerMenu'
import author from './author'
import colors from './colors'
import users from './users'

import menu from '../objects/menu'

import heading from '../objects/heading'
import footer from '../objects/footer'
import submenu from '../objects/sub_menu'
import select from '../objects/selectOptions'
import checkbox from '../objects/checkboxOptions'
import navigationMenu from './navigationMenu'
import carousel from './imageSlider'
import partners from './partners'
import cv_upload from './cv_upload'
import team from './team'
import company from './company'
import youtube from './youtube'
import hero from './hero'

import forms from './forms'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'truenorth-schema',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        post,
        author,
        category,
        cv_upload,
        forms,
        colors,
        submenu,
        team,
    youtube,
        menu,
        navigationMenu,
    company,
        select,
        checkbox,
        footer,
        hero,
        heading,
        footerMenu,
        users,
        partners,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
        carousel,
    ]),
})
