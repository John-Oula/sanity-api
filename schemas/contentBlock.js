export default {
  name: 'contentBlock',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of:[
        {
          type: 'homeBlock',
        }

      ]
    }
  ],

}
