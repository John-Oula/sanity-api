export const menu = {
    type: 'array',
    name: 'menu',
    title: 'Menu',
    of: [
        {
            type: 'object',
            name: 'menuItem',
            title: 'Menu Item',
            fields: [
                {
                    title: 'Type',
                    name: 'itemType',
                    type: 'string',
                    options: {
                        list: ['action', 'menu'],
                    },
                    initialValue: 'action',
                    validation: (R) => R.required(),
                },
                {
                    title: 'Content',
                    name: 'content',
                    type: 'string',
                    validation: (R) => R.required(),
                },
                {
                    title: 'Action',
                    name: 'action',
                    type: 'action',
                    hidden: ({ parent }) => parent?.itemType !== 'action'
                },
                {
                    title: 'Menu',
                    name: 'menu',
                    type: 'menu',
                    hidden: ({ parent }) => parent?.itemType !== 'menu'
                },
            ],
        },
    ],
}