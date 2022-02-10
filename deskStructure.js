// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

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
                                    S.documentTypeList('menu')
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
                                .title('Image Slider')
                                .child(
                                    S.document()
                                        .schemaType('carousel')
                                        .documentId('carousel')
                                ),
                            S.listItem()
                                .title('Home Page sections')
                                .child(
                                    S.documentTypeList('homeBlock')
                                ),
                            S.listItem()
                                .title('Partners')
                                .child(
                                    S.document()
                                        .schemaType('partners')
                                        .documentId('partners')
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
            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(listItem => !['colors', 'post','heading','contentBlock' ,'author', 'category','partners', 'navigationMenu', 'carousel', 'imageSlider','footerMenu'].includes(listItem.getId()))
        ])