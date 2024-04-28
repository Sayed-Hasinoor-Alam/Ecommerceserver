const multer = require('multer');

// storage config

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,"./productsimg");
    },

    filename:(req,file,callback)=>{
        const filename= `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }

})


// filter

const filter = (req,file,callback)=>{
    if(file.mimetype=== 'image/png' || file.mimetype==='image/jpg' || file.mimetype=== 'image/jpeg'){
        callback(null,true)
    }else {
        callback(null, false)
        return callback(new Error("Only png jpg ,jpeg are supported"))
    }
}

const productupload = multer({
    storage:storage,
    filter:filter
})

module.exports = productupload;