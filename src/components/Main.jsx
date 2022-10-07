

export default function  Main(props) {
    return (
        <main>
            <h2>{props.title}</h2>
            {props.description1&&<p>{props.description1}</p>}
            {props.description2&&<p>{props.description2}</p>}
            {props.description3&&<p>{props.description3}</p>}
        </main>
    )
}
