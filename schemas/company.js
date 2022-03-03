export default {
  name: 'company',
  title: 'Companies & Organizations',
  type: 'document',
  fields: [
    {
      name: 'company',
      type: 'string',

    },
    {
      name: 'category',

      type: 'string',
    },
    {
      name: 'website',

      type: 'string',
    },

    {
      name: 'logo',

      type: 'image',
    },

    {
      name: 'cover_image',

      type: 'image',
    },
    {
      name: 'intro_image',

      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      
    },
    {
      name: 'summary',

      type: 'string',
    },

    {
      name: 'description',

      type: 'string',
    },
    {
      name: 'contact',

      type: 'string',
    },
    {
      name: 'phone',

      type: 'string',
    },

    {
     name:'email',

      type: 'string',
    },
    {
     name:'street',

      type: 'string',
    },
    {
     name:'postcode',

      type: 'string',
    },
    {
     name:'city',

      type: 'string',
    },
    {
     name:'country',

      type: 'string',
    },


  ],
  preview: {
    select: {
      title: 'company',
      media: 'logo',
    },
  },
}
