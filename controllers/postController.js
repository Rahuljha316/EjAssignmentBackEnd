const db = require("../models/index");
const Post = db.post;

const createPost = async (req, res) => {
  try{
    const { id, title, content } = req.body;
  
  const post = await Post.create({ id, title, content });

  res.status(200).send(post);

  }catch{
    res.status(500).send()
  }
  
};

const getAllPost = async(req,res) =>{
    try{

        const allPost = await Post.findAll()

    }catch{
        res.status(500).send()
    }
}

const getPostById = async (req, res) => {
    try{
        const {id } = req.params
  
        const post = await Post.findbyPk(id);
    
        if(!post) return res.status(404).send('post not found')
        res.status(200).send(post)
    

    }catch{
        res.status(500).send()
    }
    
   
};

const updatePost = async(req,res) =>{
    try{
        const {id} =req.params
    const {title,content} = req.body

    const updatedPost = await Post.update({title: title, content: content},{where:{id,id}})

    if(!updatedPost) return res.status(404).send('post not found');

    res.status(200).send(updatedPost);

    }catch{
        res.status(500).send()
    }
    

}

const deletePost = async (req,res) =>{

    try{
        const { id } = req.params;

        const post = Post.destroy({where:{id: id} })
        if(!post) return res.status(404).send('not found')

        res.send('deleted successfully')

    }catch{
        res.status(500).send()
    }
}

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost

};
