import User from "../schema/User";

export default (req, res) => {
    User
        .find({})
        .then((users) =>{
            if((!users) || !users.length){
                return res.status(404).json({status:false, data:[]})
            }
            return res.status(200).json({status:true, data: users})
        })
        .catch( err => res.status(500).json({status:false, data:[]}))
}