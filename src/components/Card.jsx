export default function Card(props) {
  return (
    <div>
      <img src={`../icons/${props.logo}`} alt={props.logoAlt} />
      <h3>{props.title}</h3>
      <p>{props.description1}</p>
    </div>
  );
}
