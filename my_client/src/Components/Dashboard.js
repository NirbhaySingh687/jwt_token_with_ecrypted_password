import React,{Fragment, useState, useEffect} from 'react'

const Dashboard = ({setAuth})=> {
    const [name,setName] = useState("")

    async function getName(){
        try {
            const response = await fetch('http://localhost:5000/dashboard',{
                method:'GET',
                headers: {token: localStorage.token}
            })

            const parseRes = await response.json()
            console.log(`>>>>>>>>${parseRes}`)
            setName(parseRes.user_name)
        } catch (error) {
            console.error(error)
        }
    }

    const logout= (e)=>{
        e.preventDefault();
        localStorage.removeItem("token")
        setAuth(false)
    }

    useEffect(()=>{
        getName();
    })
    return(
        <Fragment>
            <h1>Dashboard</h1>
            {name}
            <button onclick={(e)=> logout(e)}>Logout</button>
        </Fragment>
    );
}
export default Dashboard;