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
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
        {
            name: 'dropdown',
            title: 'Dropdown Menu',
            type: 'boolean',
        },
        {
            name: 'menu_submenu',
            title: 'Sub menu',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'submenu'}]
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
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },

    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
}