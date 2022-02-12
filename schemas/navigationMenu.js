export default {
  name: 'navigationMenu',
  type: 'document',
  fields: [{
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of:[{type: 'reference',to:[{type:'menu'}]}]
    }],

}
