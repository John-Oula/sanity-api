export default {
  name: 'cv_upload',
  title: 'CV upload',
  type: 'document',
  fields: [

    {
      name: 'full_name',

      type: 'string',
    },
    {
      name: 'email',

      type: 'string',
    },

    {
      name: 'contact',

      type: 'string',
    },
    {
      name: 'information',

      type: 'string',
    },

    {
      name: 'motivation_letter',

      type: 'file',
    },
    {
      name: 'cv',

      type: 'file',
    },


  ],
  preview: {
    select: {
      title: 'full_name',
      // media: 'image',
    },
  },
}
