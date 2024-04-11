import { Banner, Blog, New, Services, Shop } from '@/components/view'


const Home = () => {
    return (
        <>
            <Banner />
            <New featured={true}/>
            <Shop />
            <Blog />
            <Services />

        </>
    )
}

export default Home