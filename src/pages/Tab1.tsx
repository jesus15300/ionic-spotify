import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';
import PlaylistButton from '../components/inicio/PlaylistButton';
import { airplane, heart } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size='12' >
            <IonButton className='ion-margin-end' shape="round">
              <IonIcon slot="icon-only" icon={heart}></IonIcon>
            </IonButton>
            <IonButton shape="round" color="success">Todos</IonButton>
            <IonButton shape="round" color="light">Round</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class='ion-no-padding ion-no-margin' sizeMd='3' sizeXs='6'>
            <PlaylistButton imageUrl='https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg'
              text='Tus me gusta'></PlaylistButton>
          </IonCol>
          <IonCol class='ion-no-padding ion-no-margin' sizeMd='3' sizeSm='6'>
            <PlaylistButton  imageUrl='https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg'
              text='Tus me gusta'></PlaylistButton>
          </IonCol>

        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem lines='none' color='transparent'>
              <IonLabel>
                <p>Nuevo lanzamiento de</p>
                <h1>Leon Larregui</h1>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>

            <IonCard >
              <IonItem className='ion-no-padding ion-no-margin' lines='none'>
                <IonImg slot='start' src='https://i.scdn.co/image/ab6761610000e5eb46c34376a1022b86c7a89b70' class='img1'></IonImg>
                <IonLabel>
                  <h1>Mixarama (No. 2)</h1>
                  <p>Sencillo Leon Larregui</p>
                </IonLabel>
              </IonItem>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem lines='none' color='transparent'>
              <IonLabel>
                <h1>Tus mix mas escuchados</h1>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
          <Swiper
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
          >
            <SwiperSlide>
              <IonCard color='transparent' className='mixImg'>
                <img alt="Silhouette of mountains" src="https://i.scdn.co/image/ab6761610000e5eb61fb472a31152d596b6bb3ab" />
                <IonCardContent class='ion-no-margin ion-padding-top'>León Larregui, Division Minuscula y inspector</IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
            <IonCard color='transparent' className='mixImg slide-item'>
            <img alt="Silhouette of mountains" src="https://i.scdn.co/image/ab67616d00001e02869df273a6f34f759b426ace" />
            <IonCardContent class='ion-no-margin ion-padding-top'>Foster the People, Empire of the sun y MGMT</IonCardContent>
          </IonCard>
            </SwiperSlide>
            <SwiperSlide>
            <IonCard color='transparent' className='mixImg'>
            <img alt="Silhouette of mountains" src="https://i.scdn.co/image/ab6761610000e5eba7bfd7835b5c1eee0c95fa6e" />
            <IonCardContent class='ion-no-margin ion-padding-top'>Daft Punk, Foster the People, M83</IonCardContent>
          </IonCard>
            </SwiperSlide>
            

          </Swiper>
          

          
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
