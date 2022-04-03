export default {
  name: 'definition',
  type: 'document',
  title: 'Definition',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'technology',
      type: 'string',
      title: 'Technology'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'definition',
      type: 'simpleBlockContent',
      title: 'Definition'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      technology: 'technology',
      definition: 'definition'
    }
  }
}
