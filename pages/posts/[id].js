import { useRouter } from "next/router"


function Post({result}){
    const router = useRouter()
    const {id}= router.query
    return (
        <>
        <h1>Post:{id}</h1>
        <p >ID: {result.id}</p>
        <p >Name: {result.name}</p>
        <p >Email: {result.email}</p>
        </>

        
    )
}
export async function getServerSideProps({params}){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const result = await resp.json()
    return {
        props:{
            result
        }
    }
}
export default Post