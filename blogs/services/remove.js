import Blog from './../schema/Blog' 

export default (req, res) =>{
    Blog
        .findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({status:false, data:{}}))

}