export default {
    name: 'submenu',
    title: 'Sub menu',
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


    // hidden: ({document}) => !document?.dropdown

preview: {
    select: {
        title: 'title',
        // landingPage: 'landingPageRoute.slug.current',

    }
,
    prepare({title})
    {


        return {
            title,

        }
    }
}
}
