import '../styles/Header.css';

type RouteLabelProps = {
  content: string;
  isActive: boolean;
  changeActiveKey: () => void;
};

export default function RouteLabel({
  content,
  isActive,
  changeActiveKey
}: RouteLabelProps) {
  return (
    <li
      className={isActive ? "nb-route-actived" : "nb-route"}
      onClick={changeActiveKey}
    >
      <a href="#">{content}</a>
    </li>
  );
}
