import "./index.scss";

export interface ElementProps{
    src: string;
    alt: string;
}

const Element:React.FC<ElementProps> = ({src, alt}) => {
  return (
    <div className="creative">
        <img src={src} alt={alt} />
    </div>
  );
};

export default Element;
