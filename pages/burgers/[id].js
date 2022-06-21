// import Image from 'next/image';
// import styles from '../../styles/Burgers.module.css';

// const Details = ({ burger }) => {
//     return (
//         <div className={styles.singleBurger}>
//             <h1>{burger.name}</h1>
//             <div className={styles.imageContainer}>
//                 <Image
//                     src={`${burger.image}`}
//                     alt={`${burger.name}`}
//                     width="100%"
//                     height="100%"
//                     layout="responsive"
//                     objectFit="cover"
//                 />
//             </div>
//             <div>
//                 <p>{burger.desc}</p>
//             </div>
//         </div>
//     );
// }

// export const getServerSideProps = async (content) => {
//     const { id } = content.params
//     const res = await fetch(`http://localhost:3000/api/burgers/${id}`)
//     const data = await res.json()

//     return {
//         props: {
//             burger: data
//         }
//     }
// }

// export default Details 