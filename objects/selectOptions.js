export default {
    name: 'select',
    title: 'Select Options',
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




    ],

}
