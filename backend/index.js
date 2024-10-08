const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))  
app.use(cors())




app.get("/",cors(),(req,res)=>
{

})

app.post("/",async(req,res)=>
{
    const {email,name,password}=req.body

    try
    {
        const check=await collection.findOne({email:email})

        if (check)
        {
            res.json("exist")
        }
        else
        {
            res.json("not exist")
        }
    }

    catch(e)
    {
        res.json("err notexist")
    }
})



app.post("/signup",async(req,res)=>
{
    const {email,name,password}=req.body

    const data=
    {
        email:email,
        name:name,
        password:password
    }

    try
    {
        const check=await collection.findOne({email:email})

        if (check)
        {
            res.json("exist")
        }
        else
        {
            res.json("not exist")
            // insert data if not exist
            await collection.insertMany([data])
        }
    }

    catch(e)
    {
        res.json("err notexist")
    }
})

app.listen(5000,()=>{
    console.log("port connected");
})