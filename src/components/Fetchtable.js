import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

// import ReactTable from 'react-table';
// import Tab from './Tab';
import './Fetchtable.module.css';



const Fetchtable = () =>{


   const [txt, setTxt] = useState("");
   const [users, setUsers] = useState([]);
   const [searched, setSearched] = useState(false);








    const inputSearch = (event) => {
        setTxt(event.target.value);

    }



           



     const searchBtn = async (e) => {
        e.preventDefault();
        setTxt(txt);
       

        console.log(txt)
        let url = ""
        if (txt === "") {
            url = "http://65.0.216.210:5000/search/people"
        }
        else {
            url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}", txt)
        }

        console.log(url)


        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json',
                    'userId': 'web_user',
                    'auth': 'we-are-metby'
                }
            })


        if (response.ok) {
            const user = await response.json();
            console.log(user);
             console.log("hello");
            console.log(user.records);
            setUsers(user.records);
            setSearched(true);
            
            

        }

    
 
}


    console.log(users);
    



    return (

        <>
            <div className="main_div_table">
                {/* <h1 className="heading_style">Welcome to Admin Login</h1> */}
                   <Link to="/logout" className="link">Logout</Link>
                <input type="text" onChange={inputSearch} placeholder="Search here user name" />
                <button className="search_button" onClick={searchBtn} >Search</button>
               
                
            
                 { searched ? users.length > 0
                       ?(
                           <div>
                               <table >
                                   <thead>
                                       <tr style={{width: '50%'}}>
                                            <th style={{width: '50%'}}>UserId  </th>
                                            <th style={{width: '50%'}}>Name</th>
                                            <th style={{width: '50%'}}>phoneNumber</th>
                                            <th style={{width: '50%'}}>profilePic</th>
                                       </tr>
                                   </thead>
                                   <tbody>

                                          {  users.map((val)=>{
                                              return(
                                               <tr key={val.userId} style={{width: '50%'}}>
                                                <td>{val.userId}</td>
                                                <td>{val.name}</td>
                                                <td>{val.phoneNumber}</td>
                                                <td>
                                                      <img src={val.profilePic} alt="error"/>
                                                </td>
                                               </tr>
                                              )
                                              })
                                           }


                                   </tbody>
                                </table>
                           </div>)


                           :(
                               <div>
                                   No users found!
                               </div>

                           ) : ''}

   </div>


</>

);


}

export default Fetchtable;

