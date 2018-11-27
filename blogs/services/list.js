import Blog from "../schema/Blog";

export default (req, res) => {
   Blog
        .find({})
        .then((blogs) => {
            if ((!blogs) || !blogs.length ) {
                return res.status(404).json({status:false, data:[]})
            }
            return res.status(200).json({status:true, data: blogs})
        })
        .catch( err => res.status(500).json({status:false, data:[]}))
}