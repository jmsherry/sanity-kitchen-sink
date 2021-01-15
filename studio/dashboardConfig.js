export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60011566a1262e7d62c70fc2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-51mkvbpi',
                  apiId: '1d163b0a-5831-4496-b274-6558e772ca20'
                },
                {
                  buildHookId: '600115665fd95460072e03d2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-i6xpf6re',
                  apiId: '78ce44b5-5ea9-4710-84c7-872a29c0777c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmsherry/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-i6xpf6re.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
