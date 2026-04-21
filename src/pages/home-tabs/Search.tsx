import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';

const Search: React.FC = () => {
    const games = [
        { name: 'Pokémon Yellow' },
        { name: 'Mega Man X' },
        { name: 'The Legend of Zelda' },
        { name: 'Pac-Man' },
        { name: 'Super Mario World' }
    ]

    const [searchText, setSearchText] = useState("");
    const [filteredGames, setFilteredGames] = useState(games);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filtered = games.filter(game =>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        }, 400);

        return () => clearTimeout(debounce);
    }, [searchText]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                 <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
                <IonList>
                    {games.map((item, index) => (
                        <IonItem key={index}>
                            <IonLabel>{item.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Search;
