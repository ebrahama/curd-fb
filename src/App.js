import { useState, useEffect } from 'react';
import './App.css';
import {db} from "./firebase-confg";
import {collection, getDocs , addDoc , updateDoc , doc ,deleteDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

function App() {

  const [newname, setname] = useState("")
  const [newage, setage] = useState(0)

  const [users, setusers] = useState([]);
  const userref = collection(db,"users");

  const adduser = async ()=>{
    await addDoc(userref,{name: newname , age: Number(newage)});
  };
  const add1 = async (id,age)=>{
    const userdoc =doc(db,"users", id)
    const newu ={age:age-1}
    await updateDoc(userdoc,newu)

  };
  const dele = async (id)=>{
    const userdoc =doc(db,"users", id)
    await deleteDoc(userdoc)

  };


  useEffect(() =>{

    const getuser = async () =>{
      const data = await getDocs(userref);

   setusers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
 };
   getuser();
  },[]);

  return (<div className="App">
     
     <input placeholder='name..' onChange={(event)=>{setname(event.target.value);}}></input>
     <input type="number" placeholder='age..' onChange={(event)=>{setage(event.target.value);}}></input>

     <button onClick={adduser}>add</button>
  
              <div className='con'>

  
      {users.map((user)=>{
        return(
          <section className='card'>
            <section className='fk'>
            <h5 className='na'><span>name: </span>{user.name}</h5>
            <h5 className='ag'><span>age: </span> {user.age}</h5>
            </section>
            
            <button className='ad' onClick={()=>{add1(user.id , user.age)}}>-1</button>
            <button className='de' onClick={()=>{dele(user.id , user.age)}}>delete</button>
       
          </section>

      );
      })}
              </div>


    </div>
  );
}

export default App;
