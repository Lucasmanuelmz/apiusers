type UserData = {
    firstName:string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string,
    born: string
}

exports.createUser = async(req: any, res: any) => {
  const {
    firstName, 
    lastName, 
    email, 
    phoneNumber, 
    password, 
    born}:UserData = req.body;

    
}