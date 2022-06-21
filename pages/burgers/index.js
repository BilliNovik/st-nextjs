// import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/Burgers.module.css'

const Burgers = ({ burgers }) => {

    return (
        <div>
            <h1>Наши бургеры</h1>
            {
                burgers?.map(burger => (
                    // <Link href={`/burgers/${burger.id}`} key={burger.id}>
                    <div className={styles.burgerCard} key={burger.id}>
                        <div className={styles.imageContainer}>
                            <Image src={`${burger.image}`} alt={`${burger.name}`} width="100%" height="100%"
                                layout="responsive" objectFit="cover" />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </div>
                    // </Link>
                ))
            }
        </div>
    )
}

export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/burgers')
        const data = await res.json()

        if (!data) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                burgers: data
            }
        }

    } catch (error) {
        return {
            props: {
                burgers: null
            }
        }

    }
}

export default Burgers 