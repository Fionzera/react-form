import { useCallback, useEffect, useMemo, useState } from "react";
import './UserList.css';
import axios from "axios";

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fecthUserData = useCallback(async()=>{
        try{
            setLoading(true);
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(data)
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    },[])


    useEffect(() => {
        fecthUserData();
    }, [])

    const renderUserData = () =>{
        if(loading){
            return(
                <div>
                    <h3>Carregando</h3>
                </div>
            )
        }else{
            return <div>
                <h2>Dados do usuário:</h2>
                {userData.map(user => (
                    <div>
                        <h4>{user.name}</h4>
                        <h5>{user.email}</h5>
                        <span>{user.company.name}</span>
                    </div>
                ))}
            </div>
        }
    }

    return (
        <div className="container">
            {renderUserData()}
        </div>
    );
}

export default UserList;