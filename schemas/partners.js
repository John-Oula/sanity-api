export default {

  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields:[
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'partner',
      title: 'Partner',
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
            name: 'image',
            title: 'Image',
            type: 'image',


          },

        ],
      }],
    }
  ]


}
