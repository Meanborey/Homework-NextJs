import Link from "next/link"
function Post({result}){
    return (
        <>
        {/* static generation can write only on page*/}
        <section>Welcome,static genertion
            {result.map(res=><h2 key={res.id}>
                <Link href={`/posts/${res.id}`}>{res.name}</Link>

            </h2>)}
           
            </section>
            {/* <ul> 
           {result.map((post)=>(
            <>
            <li>{post.id}</li>
            <li>{post.name}</li>
            <li>{post.email}</li>
            <li>{post.username}</li>

            </>

           ))

           }
            </ul> */}
            {

            }
           
            <img  src="https://m.media-amazon.com/images/I/71ufuanFyTL._AC_SL1500_.jpg"/>
        </>
    )
}
// impliment static generation
export async function getServerSideProps(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await resp.json()
    return {
        props:{
            result
        }
    }
}
export default Post