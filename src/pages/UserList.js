import { useCallback, useEffect, useMemo, useState } from "react";

const UserList = () => {
    const [state, setState] = useState(0);

    useEffect(() =>{
        console.log('useEffect como didMount')
    }, [state])

    const nomeFuncao = useCallback(()=>{

    }, [])

    const valor = useMemo(()=> {
        
    }, [])
    return (
        <div className="container">
            <h1>Exemplo random</h1>
        </div>
    );
}

export default UserList;