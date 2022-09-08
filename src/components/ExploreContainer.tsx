import './ExploreContainer.css';
import {ReadCardByNFC} from "drifter-nfc";

interface ContainerProps { }


const startNfc = async () => {
    ReadCardByNFC.readCard('filter');
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <button onClick={()=>startNfc()} >Nfc Oku</button>

    </div>
  );
};

export default ExploreContainer;
