const product = {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [

        
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'productName',
            title: 'ProductName',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name' }
        },
        {
            name: 'categori',
            title: 'Categori',
            type: 'string'
        },
        {
            name: 'material',
            title: 'Material',
            type: 'string'
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',

        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'pris',
            title: 'Pris',
            type: 'number',
        },
        
        {
            name: 'sale',
            title: 'Sale',
            type: 'boolean',
        },
        {
            name: 'tilbudsprosent',
            title: 'Tilbudsprosent',
            type: 'number',
        },
        {
            name: 'inStock',
            title: 'InStock',
            type: 'number',
        },
    ]
}

export default product;