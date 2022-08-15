import Section from 'components/Section';
import songs from 'data/songs';

// EN: Home Page Component - datas are imported from data/songs.js
// TR: Anasayfa Komponenti - Veriler data/songs.js'den alınıyor
// DE: Home Page Component - Daten aus data/songs.js importiert

function Home(){
    return (
        <div className="grid gap-y-8">
            <Section 
            title="Recently played"
            more="/blabla"
            items={songs}
             />
             <Section 
            title="Shows to try"
            more="/blabla"
            items={songs}
             />
             <Section 
            title="Made for Furkan"
            more="/blabla"
            items={songs}
             />          
        </div>
    )
}

export default Home;