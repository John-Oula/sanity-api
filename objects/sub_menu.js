export default {

    name: 'submenu',
    title: 'Sub menu',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: (doc, options) => options.parent.title,
                maxLength: 96,
            },
        },
        //
        // {
        //     name: 'list',
        //     title: 'Display list of posts',
        //     type: 'boolean',
        // },
        {
            name: 'category',
            title: 'Which category would you like to reference?',
            type: 'reference',
            to: [{type: 'category'}],
            hidden: ({parent, value}) => !value && !parent?.list

        },
        // {
        //     name: 'single',
        //     title: 'Display one post',
        //     type: 'boolean',
        // },
        // {
        //     name: 'post',
        //     title: 'Which post would you like to reference?',
        //     type: 'reference',
        //     to: [{type: 'post'}],
        //     hidden: ({parent, value}) => !value && !parent?.single
        //
        //
        // },

    ],

    // hidden: ({document}) => !document?.dropdown


    // hidden: ({document}) => !document?.dropdown

    preview: {
        select: {
            title: 'title',
            // landingPage: 'landingPageRoute.slug.current',

        }
        ,
        prepare({title}) {


            return {
                title,

            }
        }
    }
}
