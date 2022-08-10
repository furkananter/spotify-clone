import Section from 'components/Section';

function Home(){

    const items = [
        {
            id: 1,
            title: 'Series & Movie Musics',
            image: 'https://i.scdn.co/image/ab67706c0000da848cd36eb822c23457761dc3eb',
            artist: 'Furkan Anter',
            description: 'Ezel, Medcezir, Kuzey Güney, Yıldızlararası, Planet Earth vb...',
            src: 'https://cdn.freesound.org/previews/646/646486_1391542-lq.mp3',
            type:'album',
        },
        {
            id: 2,
            title: 'Road-trip 🚘',
            image: 'https://i.scdn.co/image/ab67706c0000da846aed8fed9fc17a116c32da86',
            artist: 'Furkan Anter',
            description: 'Road Road Road',
            src: 'https://cdn.freesound.org/previews/646/646487_5674468-lq.mp3',
            type:'album',

        },
        {
            id: 3,
            title: 'Doge',
            image: 'https://i1.sndcdn.com/artworks-Sok1hKQ08xcNGPxr-VBLMvA-t500x500.jpg',
            artist: 'Furkan Anter',
            description: 'NFT Music',
            src: 'https://cdn.freesound.org/previews/646/646457_1648170-lq.mp3',
            type:'album',
        },
        {
            id: 4,
            title: '<Code> 👨‍💻',
            image: 'https://i.scdn.co/image/ab67706c0000da84bd86a6416b81fceeab89b5fe',
            artist: 'Furkan Anter',
            description: 'I usually listen this playlist when i code. There mostly no words in these songs.',
            src: 'https://assets.mixkit.co/sfx/preview/mixkit-game-show-suspense-waiting-667.mp3',
            type:'podcast',
        },
        {
            id: 5,
            title: 'Asmodeus',
            image: 'https://i1.sndcdn.com/avatars-LVCe1uRxIp1qqQoh-DDmlzw-t500x500.jpg',
            artist: 'Furkan Anter',
            description: 'Artist',
            src: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3',
            type:'artist',
        },
    ]

    return (
        <div className="grid gap-y-8">
            <Section 
            title="Recently played"
            more="/blabla"
            items={items}
             />
             <Section 
            title="Shows to try"
            more="/blabla"
            items={items}
             />
             <Section 
            title="Made for Furkan"
            more="/blabla"
            items={items}
             />          
        </div>
    )
}

export default Home;