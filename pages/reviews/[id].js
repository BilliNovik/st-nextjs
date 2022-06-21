

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/`)
    const data = await res.json()

    const paths = data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        }
    }

}
const Review = ({ data }) => {
    return (
        <div>
            <h1>{`name: ${data.name}`}</h1>
            <p>{`email: ${data.email}`}</p>
            <p>{data.body}</p>
        </div>
    )
}

export default Review 