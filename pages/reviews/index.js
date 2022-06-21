import Head from 'next/head'
import Link from 'next/link'

const Reviews = ({ reviews }) => {

    return (<>
        <Head>
            <title>Жирные бургеры | Главная</title>
            <meta name="title" content="Жирные бургеры" />
        </Head>
        <div>
            <h1>Отзывы клиентов</h1>
            <div className='rewievs'>
                {
                    reviews?.map(res => (
                        <div key={res.id} className='review'>
                            <Link href={`/reviews/${res.id}`}>
                                {`${res.id} ${res.email} - ${res.body.slice(0, 70)}...`}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </>)
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()

    return {
        props: {
            reviews: data.slice(0, 30)
        }
    }
}

export default Reviews 