import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'; 
import {bookOutline, search, star} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Favorites from './home-tabs/favorite';
import Feed from './home-tabs/feed';
import Search from './home-tabs/search';
import { Icon } from 'ionicons/dist/types/components/icon/icon';



const Home: React.FC = () => {
    const tabs = [
            {name: 'Feed',tab:'feed',url:'/app/home/feed',icon:bookOutline},
            {name: 'Favorites',tab:'favorites',url:'/app/home/favorites',icon:star},
            {name: 'Search',tab:'search',url:'/app/home/search',icon:search}
    ]

  return (
    <IonReactRouter>
        <IonTabs>
            <IonTabBar slot='bottom'>
            <IonToolbar>
                <IonTitle>
                Tabs
                </IonTitle>
                </IonToolbar>
                {/** */}
                {tabs.map((tab,index) => (
                  <IonTabButton key={index} tab={tab.tab} href={tab.url}>
                    <IonIcon icon={tab.icon}></IonIcon>
                    <IonLabel>{tab.name}</IonLabel>
                    </IonTabButton>
                ))}
            </IonTabBar>  

            <IonRouterOutlet>
                <Route  exact path='/app/home/feed' component={Feed} />
                <Route exact path='/app/home'>
                    <Redirect to='/app/home/feed' />
                    </Route>
                <Route exact path='/app/home/favorites' component={Favorites} />
                <Route exact path='/app/home/search' component={Search} />

            </IonRouterOutlet>
        </IonTabs>
    </IonReactRouter>
  );

}


export default Home;