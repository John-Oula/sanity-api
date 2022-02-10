export default {
  name: 'footerMenu',
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
          type: 'footer',
        }

      ]
    }
  ],

}
