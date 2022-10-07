export default function Card(props) {
    const pic = require(`../icons/${props.logo}`)
  return (
    <div>
      <img src={pic} alt={props.logoAlt} />
      <h3>{props.title}</h3>
      <p>{props.description1}</p>
    </div>
  );
}
