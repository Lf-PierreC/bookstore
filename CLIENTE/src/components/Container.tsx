import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

function Container(props: ContainerProps) {
  return (
    <div className={`container ${props.customClass ? props.customClass : ''}`}>
      {props.children}
    </div>
  );
}

export default Container;
