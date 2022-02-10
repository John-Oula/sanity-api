export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'dropdown',
            title: 'Dropdown Menu',
            type: 'boolean',
        },
        {
            name: 'submenu',
            title: 'Sub menu',
            type: 'array',
            of: [{
                type: 'object',
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

                    {
                        name: 'list',
                        title: 'Display list of posts',
                        type: 'boolean',
                    },
                    {
                        name: 'category',
                        title: 'Which category would you like to reference?',
                        type: 'reference',
                        to: [{ type: 'category' }],
                        hidden: ({ parent, value }) => !value && !parent?.list

                    },
                    {
                        name: 'single',
                        title: 'Display one post',
                        type: 'boolean',
                    },
                    {
                        name: 'post',
                        title: 'Which post would you like to reference?',
                        type: 'reference',
                        to: [{ type: 'post' }],
                        hidden: ({ parent, value }) => !value && !parent?.single


                    },

                ],
            }],
            // hidden: ({document}) => !document?.dropdown

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'category',
            title: 'Which category would you like to reference?',
            type: 'reference',
            to: [{ type: 'category' }]

        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },

    ],

}