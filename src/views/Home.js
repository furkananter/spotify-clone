import Section from 'components/Section';

function Home(){

    const items = [
        {
            id: 1,
            title: 'Series & Movie Musics',
            image: 'https://i.scdn.co/image/ab67706c0000da848cd36eb822c23457761dc3eb',
            description: 'Ezel, Medcezir, Kuzey Güney, Yıldızlararası, Planet Earth vb...'
        },
        {
            id: 2,
            title: 'Series & Movie Musics',
            image: 'https://i.scdn.co/image/ab67706c0000da848cd36eb822c23457761dc3eb',
            description: 'Ezel, Medcezir, Kuzey Güney, Yıldızlararası, Planet Earth vb...'
        },
        {
            id: 3,
            title: 'Series & Movie Musics',
            image: 'https://i.scdn.co/image/ab67706c0000da848cd36eb822c23457761dc3eb',
            description: 'Ezel, Medcezir, Kuzey Güney, Yıldızlararası, Planet Earth vb...'
        },
    ]

    return (
        <div>
            <Section 
            title="Recently played"
            more="/blabla"
            items={items}
             />        
        </div>
    )
}

export default Home;