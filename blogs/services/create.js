import Blog from './../schema/Blog'

export default (req, res) => {
    let blog = new Blog(req.body)

    blog
        .save()
        .then((created) => {
            if (!created) {
               return  res
               .status(404)
               .json({status: false, data: {}})
            }
            return res
                .status(201)
                .json({status:true, data:created})
        })
        .catch(err => res
                .status(500)
                .json({status: false, data:{}}))
}