// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import footer from './footer'
import author from './author'
import menu from './menu'
import carousel from './imageSlider'
import partners from './partners'
import privacy from './privacy'
import submenu from './submenu'
import headings from './contentTitleBlocks'


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

    menu,
    footer,
    headings,
    privacy,
    submenu,
    partners,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
      carousel,
  ]),
})
