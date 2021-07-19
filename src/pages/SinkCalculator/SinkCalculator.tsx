import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { playOutline, refreshOutline } from "ionicons/icons";
import { useCallback, useMemo, useState } from "react";
import { RuneWeights } from "src/constants/RuneWeight";
import "./SinkCalculator.css";

interface ISinkCalculatorItemProps {
  imgSrc: string;
  runeName: string;
  lowValue: number;
  midValue?: number;
  highValue?: number;
  runeWeight: number;
}

export const SinkCalculator = () => {
  const ionColProps = useMemo(
    () => ({
      size: "4",
      sizeXl: "4",
      sizeLg: "6",
      sizeMd: "6",
      sizeSm: "12",
      sizeXs: "12",
    }),
    []
  );

  const [sinkCounter, setSinkCounter] = useState(0);

  const SinkCalculatorItem = (
    sinkCalculatorItemProps: ISinkCalculatorItemProps
  ) => {
    const { imgSrc, lowValue, midValue, highValue, runeName, runeWeight } =
      sinkCalculatorItemProps;

    const reduceSinkCounter = useCallback(
      (value: number) => {
        setSinkCounter((oldSinkValue) => {
          const newSinkValue = oldSinkValue - value * runeWeight;
          if (newSinkValue < 0) {
            return 0;
          }
          return newSinkValue;
        });
      },
      [runeWeight]
    );

    const increaseSinkCounter = useCallback(
      (value: number) => {
        setSinkCounter((oldSinkValue) => oldSinkValue + value * runeWeight);
      },
      [runeWeight]
    );

    return (
      <div className="sinkCalculatorItem">
        <div className="sinkCalculatorItemSlot">
          {highValue ? (
            <div className="sinkCalculatorItemAction">
              <div className="sinkCalculatorItemIconContainer">
                <IonButton
                  size="small"
                  className="sinkCalculatorItemIconContainerButton backwards"
                  color="secondary"
                  onClick={() => reduceSinkCounter(highValue)}
                >
                  <IonIcon icon={playOutline}></IonIcon>
                </IonButton>
              </div>
              <div className="sinkCalculatorItemRuneDescription">
                -{highValue}
              </div>
            </div>
          ) : null}
          {midValue ? (
            <div className="sinkCalculatorItemAction">
              <div className="sinkCalculatorItemIconContainer">
                <IonButton
                  size="small"
                  className="sinkCalculatorItemIconContainerButton backwards"
                  color="secondary"
                  onClick={() => reduceSinkCounter(midValue)}
                >
                  <IonIcon icon={playOutline}></IonIcon>
                </IonButton>
              </div>
              <div className="sinkCalculatorItemRuneDescription">
                -{midValue}
              </div>
            </div>
          ) : null}
          <div className="sinkCalculatorItemAction">
            <div className="sinkCalculatorItemIconContainer">
              <IonButton
                size="small"
                className="sinkCalculatorItemIconContainerButton backwards"
                color="secondary"
                onClick={() => reduceSinkCounter(lowValue)}
              >
                <IonIcon icon={playOutline}></IonIcon>
              </IonButton>
            </div>
            <div className="sinkCalculatorItemRuneDescription">-{lowValue}</div>
          </div>
        </div>
        <div className="sinkCalculatorItemSlot sinkCalculatorItemMiddleSlot">
          <div className="sinkCalculatorRune">
            <div className="sinkCalculatorItemImageContainer">
              <img className="sinkCalculatorItemImage" src={imgSrc} alt="" />
            </div>
            <div className="sinkCalculatorItemRuneDescription">{runeName}</div>
          </div>
        </div>
        <div className="sinkCalculatorItemSlot">
          <div className="sinkCalculatorItemAction">
            <div className="sinkCalculatorItemIconContainer">
              <IonButton
                size="small"
                className="sinkCalculatorItemIconContainerButton"
                color="secondary"
                onClick={() => increaseSinkCounter(lowValue)}
              >
                <IonIcon icon={playOutline}></IonIcon>
              </IonButton>
            </div>
            <div className="sinkCalculatorItemRuneDescription">+{lowValue}</div>
          </div>
          {midValue ? (
            <div className="sinkCalculatorItemAction">
              <div className="sinkCalculatorItemIconContainer">
                <IonButton
                  size="small"
                  className="sinkCalculatorItemIconContainerButton"
                  color="secondary"
                  onClick={() => increaseSinkCounter(midValue)}
                >
                  <IonIcon icon={playOutline}></IonIcon>
                </IonButton>
              </div>
              <div className="sinkCalculatorItemRuneDescription">
                +{midValue}
              </div>
            </div>
          ) : null}
          {highValue ? (
            <div className="sinkCalculatorItemAction">
              <div className="sinkCalculatorItemIconContainer">
                <IonButton
                  size="small"
                  className="sinkCalculatorItemIconContainerButton"
                  color="secondary"
                  onClick={() => increaseSinkCounter(highValue)}
                >
                  <IonIcon icon={playOutline}></IonIcon>
                </IonButton>
              </div>
              <div className="sinkCalculatorItemRuneDescription">
                +{highValue}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const sinkCalculatorOptions = useMemo(
    () => (
      <div className="sinkCalculatorOptions">
        <IonGrid>
          <IonRow>
            {RuneWeights.map((runeWeight, index) => (
              <IonCol key={index} {...ionColProps}>
                <SinkCalculatorItem {...runeWeight} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </div>
    ),
    [ionColProps]
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Sink Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollEvents>
        <div className="sinkCalculatorContainer">
          <div className="sinkCalculatorCounter">
            <span>Restos actuales: {sinkCounter}</span>
            <IonButton size="small" onClick={() => setSinkCounter(0)}>
              <IonIcon icon={refreshOutline} />
            </IonButton>
          </div>
          {sinkCalculatorOptions}
        </div>
      </IonContent>
    </IonPage>
  );
};
