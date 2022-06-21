import { GiHamburger } from 'react-icons/gi'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navigation = [
    { id: 1, title: 'Домой', path: '/' },
    { id: 2, title: 'О нас', path: '/about' },
    { id: 3, title: 'Отзывы', path: '/reviews' },
    { id: 4, title: 'Бургеры', path: '/burgers' },
]

const Header = () => {
    const { pathname } = useRouter()

    return (
        <header>
            <div>
                <GiHamburger />
            </div>
            <nav>
                {navigation.map(link => (
                    <Link key={link.id} href={link.path}>
                        <a className={pathname === link.path ? 'active' : null}>{link.title}</a>
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header 