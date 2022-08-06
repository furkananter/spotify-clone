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
            title: 'Road-trip 🚘',
            image: 'https://i.scdn.co/image/ab67706c0000da84686abc7d15d1972b6765a6dc',
            description: 'Road Road Road'
        },
        {
            id: 3,
            title: 'ee nabiyim',
            image: 'https://i.scdn.co/image/ab67706c0000da844c621ab106de67d89b641cc9',
            description: 'kaldı heveslerim kursağımda'
        },
        {
            id: 4,
            title: '<Code> 👨‍💻',
            image: 'https://i.scdn.co/image/ab67706c0000da84bd86a6416b81fceeab89b5fe',
            description: 'I usually listen this playlist when i code. There mostly no words in these songs.'
        },
        {
            id: 5,
            title: 'hypebeast 👟',
            image: 'https://i.scdn.co/image/ab67706c0000da842b8a92a73ca3a70247282551',
            description: 'Culture of Hypebeast'
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