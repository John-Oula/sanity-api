export default {

  name: 'submenu',
  title: 'Sub Menu',
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
      name: 'category',
      title: 'Which category does the post(s) fall under?',
      type: 'reference',
      to: [{ type: 'category' }]

    },
  ]


}
