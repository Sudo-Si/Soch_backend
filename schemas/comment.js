export default{
    name:'comment', 
    title: 'Comment', 
    type :'document', 
    fields:[
        {
            name: 'postedBy',
            title: 'PostedBy',
            // type: 'string'
            type: 'postedBy'
        }, 
        {
            name: 'comment',
            title: 'Comment',
            type: 'string'
        }
    ]
}