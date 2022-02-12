export default {
    name: 'forms',
    title: 'Forms',
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
        {
            name: 'formFields',
            title: 'Form fields',
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
                        name: 'fieldType',
                        title: 'Form field type',
                        type: 'string',
                        options: {
                            layout: 'radio',
                            list: ['text', 'checkbox', 'file','select','textarea','country','text-editor']
                        }

                    },
                    {
                        name: 'selectOptions',
                        title: 'Select Options',
                        type: 'array',
                        of:[{type:'select'}]

                    },
                    {
                        name: 'checkboxOptions',
                        title: 'Checkbox Options',
                        type: 'array',
                        of:[{type:'checkbox'}]

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

            }],


        },

        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },

    ],

}
