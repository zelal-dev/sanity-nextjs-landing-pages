export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6055b2c104dd74b0bd3c8a92',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m2kk3p31',
                  apiId: '6f478fad-ed35-43cf-83f8-52859478a77b'
                },
                {
                  buildHookId: '6055b2c2d4454b7d6ce6383a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j3qst7oc',
                  apiId: '75e4e304-7f2b-46df-bdd2-4ac180eb587e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zelal-dev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j3qst7oc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
