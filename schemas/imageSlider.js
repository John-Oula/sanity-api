export default {

  name: 'imageSlider',
  title: 'Image Slider',
  type: 'document',
  fields:[
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'carousel',
      title: 'Image Slider',
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
            description: 'This images will appear as a slider on the website',
            options: {
              hotspot: true,
            },

          },

        ],
      }],
    }
  ]


}
