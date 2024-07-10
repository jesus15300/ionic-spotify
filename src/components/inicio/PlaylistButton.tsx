import './PlaylistButton.css';
import { IonCard, IonCardContent, IonCol, IonImg, IonItem, IonLabel, IonRow, IonText } from '@ionic/react';
interface ContainerProps {
    imageUrl: string;
    text: string;
}
const PlaylistButton: React.FC<ContainerProps> = ({ imageUrl, text }) => {
    return (
        <>
            <IonCard color="light">
              <IonCardContent class='ion-no-padding'>
                <IonItem lines='none' className='ion-no-padding'>
                  <IonImg  slot='start' class='ion-no-margin ion-no-padding img' src={imageUrl}>
                  </IonImg>
                  <IonLabel><div className='ion-padding-start text-sm'>{text}</div></IonLabel>
                </IonItem>

              </IonCardContent>
            </IonCard>
        </>
    );
};

export default PlaylistButton;
