import Catalog from '@/components/Catalog'
import MainPreview from '@/components/MainPreview'
import styles from '@/styles/Home.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <MainPreview />
            <Catalog />
        </main>
    )
}
