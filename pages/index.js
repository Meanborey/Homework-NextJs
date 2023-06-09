import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from './conponent/layout'
import Link from 'next/link'
import { API_KEY, BASE_PATH, BASE_URL } from './lib/constant'

const inter = Inter({ subsets: ['latin'] })

 function Home({movies}) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTQvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
       </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className='container'>
            <div className="row g-3">
                {
                  movies.results.map(movie => (
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        <Link href={{
                          pathname: `/movies/${movie.id}`,
                          query: {
                            movie: JSON.stringify(movie)
                          }
                        }} 
                        as={`/movies/${movie.id}`}
                        className="text-decoration-none">
                        <div className="card border-0 shadow-sm h-100">
                            <img src={BASE_PATH + movie.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{movie.title}</p>
                            </div>
                        </div>
                        </Link>
                      </div>
                  ))
                }
            </div>
        </div>
      </main>
    </Layout>
  )
  }

  export async function getServerSideProps(){
  console.log(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`)
  const resp = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=1`)
  const res = await resp.json()
  console.log(res);
  return {
    props:{
      movies: res
    },
  }
}
export default Home;
