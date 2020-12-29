import useImage from 'use-image';
import { Stage, Layer, Image } from 'react-konva';

const ImageBG = (props) => {
  const [image] = useImage('./img/bg.jpg');
  // const [image] = useImage('familiar-pwa2/img/bg.jpg');
  return <Image 
    width={props.w}
    height={props.h}
    image={image} />;
  };
  
  const Character = () => {
    const [image] = useImage('./img/walking_01.png');
    // const [image] = useImage('familiar-pwa2/img/walking_01.png');
    return <Image 
    width={500}
    height={500}
    x = {390}
    y = {130}
    image={image} />;
  };
  
  const Canvas = (props)=>{
    return(
    <Stage
    className = 'stage'
    width={props.w}
    height={props.h}
    >
    <Layer>
    <ImageBG
    w={props.w}
    h={props.h}/>
    <Character/>
    </Layer>
  </Stage>);
  }
  
export default Canvas;