export default{
    name: 'pin',
    title:'Pin', 
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        }
        ,
        {
            name: 'destination',
            title: 'Destination',
            type: 'url'
        }
        ,
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        }
        ,
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true
                //                   hotspot
                // boolean
                // Enables the user interface for selecting what areas of an image should always be cropped,
                //  what areas should never be cropped, and the center of the area to crop around when resizing. 
                //  The hotspot data is stored in the image field itself, not in the image asset, so images can 
                //  have different crops for each place they are used.
                //  Hotspot makes it possible to responsively adapt images to different aspect ratios at display time. 
                //  The default value for hotspot is false.
                            }
        }
        ,
        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        }
        ,
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
            // type: 'string'
        }
        ,
        {
            name: 'save',
            title: 'Save',
            // type: 'string', 
            type: 'array', 
            of: [{type : 'save'}]
        }
        ,
        {
            name: 'comment',
            title: 'Comment',
            // type: 'string', 
            type: 'array', 
            of: [{type : 'comment'}]
        }
      
    ]
}