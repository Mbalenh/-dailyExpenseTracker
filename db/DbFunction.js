const DbFunction = (db) =>{
	const register = async  (firstname,lastname,email,password) =>{

		if(await db.oneOrNone('select* from users where email=$1',[email])){
				return
		}else{
			await db.none('INSERT INTO users (Firstname, Lastname, email, password) VALUES ($1,$2,$3,$4);', [firstname,lastname,email,password])
		}
		

}

const login = async  (email,password) =>{

        const result = await db.one('SELECT * FROM users where email=$1 and password=$2',[email,password])


}
const categories = async()=>{
  await db.ManyorNone('select * from  categories order by name asc')
}

const expenses= async()=>{
await db.ManyorNone('
select * to_char(expenses_on,'day') as day
from 
join ex

	')

}


}
return{
register,
login


	}

module.exports = DbFunction