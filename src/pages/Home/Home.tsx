import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ionDefaultResponsiveColProps } from "../../components/ionicComponentsProps";
import "./Home.css";

/* Images have to be of a resolution scale of 16:9 */
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>El laboratorio de Yoriork</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollEvents>
        <IonGrid>
          <IonRow>
            <IonCol {...ionDefaultResponsiveColProps}>
              <IonCard routerLink="/sinkCalculator" routerDirection="forward">
                <img src="assets\images\home\forjamagia.jpg" alt=""></img>
                <IonCardHeader>
                  <IonCardTitle>Calcular restos</IonCardTitle>
                  <IonCardSubtitle>El mejor amigo del magueo</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <span>
                    Calcula los restos a medida que magueas tus objetos
                    preferidos con esta herramienta.
                    <br />
                    <br />
                  </span>{" "}
                  <span>
                    Obten los mejores objetos sin hacer calculos a mano!
                  </span>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
