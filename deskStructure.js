// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'
import resolveProductionUrl from './resolveProductionUrl'

export const getDefaultDocumentNode = () => {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
            // Required: Accepts an async function
            url: (doc) => resolveProductionUrl(doc),
            
            
            // Optional: Set the default size
            defaultSize: `desktop`, // default `desktop`
            // Optional: Add a reload button, or reload on new document revisions
            reload: {
              button: true, // default `undefined`
              revision: true, // default `undefined`
            },
          })
        .title('Preview'),
    ])
  }
export default () =>
    S.list()
        .title('Truenorth Dashboard')
        .items([
            S.listItem()
                .title('Page Builder')
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title('Navigation Menus')
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title('Navigation menus')
                                .child(
                                    S.document()
                                        .schemaType('navigationMenu')
                                        .documentId('navigationMenu')
                                ),
                            S.listItem()
                                .title('Pages')
                                .child(
                                    S.documentTypeList('post')
                                        .filter(
                                            `_type == "post" && category == "News"`
                                        )
                                ),
                            S.listItem()
                                .title('Footer')
                                .child(
                                    S.document()
                                        .schemaType('footerMenu')
                                        .documentId('footerMenu')
                                ),
                                S.listItem()
                                    .title('Site Colors')
                                    .child(
                                        S.document()
                                            .schemaType('colors')
                                            .documentId('colors')
                                    ),
                                    S.listItem()
                                        .title('Homepage Image')
                                        .child(
                                            S.document()
                                                .schemaType('hero')
                                                .documentId('hero')
                                        ),
                            S.listItem()
                                .title('Image Slider')
                                .child(
                                    S.documentTypeList('imageSlider')

                                ),
                            S.listItem()
                                .title('Page sections')
                                .child(
                                    S.documentTypeList('heading')
                                ),
                            S.listItem()
                                .title('Partners')
                                .child(
                                    S.documentTypeList('partners')
                                ),
                        ])),
            S.listItem()
                .title('Blog')
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title('Blog Management')
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
  .title('Articles By Category')
  .child(
    S.documentTypeList('category')
      .title('Articles by Category')
      .child(categoryId =>
        S.documentList()
          .title('Posts')
          .filter('_type == "post" && $categoryId in category[]._ref')
          .params({ categoryId })
      )
  ),
                            S.listItem()
                                .title('Blog Posts')
                                .child(
                                    S.documentTypeList('post')
                                ),
                            S.listItem()
                                .title('Authors')
                                .child(
                                    S.documentTypeList('post')
                                ),
                            S.listItem()
                                .title('Teams')
                                .child(
                                    S.documentTypeList('team'),
                                ),

                            S.listItem()
                                .title('Category')
                                .child(
                                    S.documentTypeList('category')
                                ),


                        ])),
            S.listItem()
                .title('Registrations')
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title('Registrations')
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title('Individual Coaching')
                                .child(
                                    S.documentTypeList('users')
                                ),
                            S.listItem()
                                .title('CV uploads')
                                .child(
                                    S.documentTypeList('cv_upload')
                                ),
                            S.listItem()
                                .title('Companies & Organizations')
                                .child(
                                    S.documentTypeList('company'),
                                ),
])),
                            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(listItem => !['colors','users','hero','company','menu','submenu','cv_upload','team', 'post','heading','contentBlock' ,'author', 'category','partners', 'navigationMenu', 'carousel', 'imageSlider','footerMenu'].includes(listItem.getId()))
        ])