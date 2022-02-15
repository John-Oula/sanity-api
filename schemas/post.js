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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
      title: 'Which homepage heading would you like to reference?',
      type: 'reference',
      to: [{ type: 'heading' }]

    },
  ],
  initialValue:{
    link: false
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
