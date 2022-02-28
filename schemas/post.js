export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Should be an external link?',
      type: 'boolean',
    },

    {
      name: 'externalLink',
      title: 'URL',
      type: 'url',
      hidden: ({parent, value}) => !value && !parent?.link
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
          title: 'Group',
          type: 'reference',
          to: [{ type: 'category' }]

      },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagePreview',
      title: 'Preview image',
      type: 'boolean',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'layout',
      title: 'Table Layout',
      type: 'boolean',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },

        {
          title: "Video file",
          name: "video",
          type: "mux.video"
        },
    {
      name: 'headings',
      title: 'Which content heading block would you like to reference?',
      type: 'reference',
      to: [{ type: 'heading' }]

    },
  ],
  initialValue:{
    link: false,
    previewFull: false,
    imagePreview: false,
    imagePreview: false,
  },

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
