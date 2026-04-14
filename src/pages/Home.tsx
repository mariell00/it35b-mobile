import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTabBar, IonTabButton, IonTabs, IonTabsContext, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Modal from '../components/Modal';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabBarCustomEvent, openURL } from '@ionic/core';
import Favorites from './home-tabs/Favorites';
import { Redirect, Route, } from 'react-router';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';
import { bookOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const tabs = [
    { name: 'Favorites', tab: 'Favorites', url: '/app/home/Favorites', icon: bookOutline },
    { name: 'Feed', tab: 'Feed', url: '/app/home/Feed', icon: 'star' },
    { name: 'Search', tab: 'Search', url: '/app/home/Search', icon: 'search'},
  ];

  return (
    <IonReactRouter>
      <IonTabs>
          <IonTabBar slot="bottom">
            <IonToolbar />
          <IonTitle>
            Tabs
          </IonTitle>
           <IonToolbar />
           {/**/}
           {tabs.map((item, index) => (
             <IonTabButton tab={item.tab} key={index} href={item.url}>
               <IonIcon icon={item.icon} />
               <IonLabel>{item.name}</IonLabel>
             </IonTabButton>
           ))}
        </IonTabBar>

        <IonReactRouter>
          <Route exact path="/app/home/Feed" component={Feed} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/Feed" />
          </Route>
          <Route exact path="/app/home/Favorites" component={Favorites} />
          <Route exact path="/app/home/Search" component={Search} />
        </IonReactRouter>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
