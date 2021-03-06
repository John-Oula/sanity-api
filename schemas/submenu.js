export default {

  name: 'subb',
  title: 'Sub Menu',
  type: 'object',
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
