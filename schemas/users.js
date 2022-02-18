export default {
  name: 'users',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      type: 'string',

    },
    {
      name: 'last_name',

      type: 'string',
    },
    {
      name: 'email',

      type: 'string',
    },

    {
      name: 'information',

      type: 'string',
    },

    {
      name: 'motivation',

      type: 'string',
    },
    {
      name: 'package',

      type: 'string',
    },
    {
      name: 'payment',

      type: 'string',
    },

    {
      name: 'recommendation',

      type: 'string',
    },
    {
      name: 'undergraduate_masters_phd',

      type: 'string',
    },

    {
     name:'german',

      type: 'string',
    },
    {
     name:'first_degree',

      type: 'string',
    },
    {
     name:'cv',

      type: 'file',
    },
    {
     name:'finance',

      type: 'string',
    },
    {
     name:'know_us',

      type: 'string',
    },


  ],
  preview: {
    select: {
      title: 'first_name',
      // media: 'image',
    },
  },
}
