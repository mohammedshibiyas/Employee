import schema from './user.model.js'

export async function addTask(req,res){
    const {Name,Email,Empid,Phone,Address,Salary,Designation,Photo}=req.body
    res.status(201).send(schema.create({Name,Email,Empid,Phone,Address,Salary,Designation,Photo}));
}

export async function getTask(req,res){ 
    let task=await schema.find()
    res.status(200).send(task)
}

export async function getDetails(req,res){
    const {id}=req.params;
    console.log(id);
    let emp=await schema.findOne({_id:id})
    res.status(200).send(emp) 
}
export function delTask(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

// export async function editTask(req, res) {
//     const { id } = req.params;
//     const { task } = req.body;
//     try {
//         await schema.updateOne({ _id: id },{task:task});
//          res.status(201).send("updated");
//     } catch (error) {
//         console.log(error);
//     }
// }
export async function editEmployee(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}