import { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

function Modal() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState('');

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      setMessage(`Hello, ${event.detail.data}!`);
    }
  }

  // ✅ THIS WAS MISSING
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton id="open-modal">Open Modal</IonButton>

        <IonModal
          ref={modal}
          trigger="open-modal"
          onWillDismiss={onWillDismiss}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Enter Name</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <IonItem>
              <IonInput
                ref={input}
                placeholder="Enter your name"
              />
            </IonItem>

            <IonButton expand="block" onClick={confirm}>
              Confirm
            </IonButton>
          </IonContent>
        </IonModal>

        <p>{message}</p>
      </IonContent>
    </IonPage>
  );
}

export default Modal;