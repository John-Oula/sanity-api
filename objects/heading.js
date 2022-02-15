export default {

    name: 'heading',
    title: 'Home Content',
    type: 'document',
    fields:[
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
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name:'featured',
            title: 'Feature block on the homepage',
            type: 'boolean',

        },
        {
            name:'sidebar',
            title: 'Feature block on the sidebar',
            type: 'boolean',

        },
        {
            name:'heading_submenu',
            title: 'Which sub category would you like to reference',
            type: 'reference',
            to:[{type: 'submenu'}]

        },
        {
            name: 'position',
            title: 'Position',
            type: 'number',
            description:'This is the position the content will take on the homepage'
        },
    ],

    initialValue:{
        featured: false,
        sidebar: false,
    }
}
