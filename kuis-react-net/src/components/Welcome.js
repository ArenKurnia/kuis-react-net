import ReactDOM from "react-dom/client";

export function Welcome(props){
    return <h1>Selamat Datang {props.nama}</h1>
}
const nama = "Aren Kurnia";


const root = ReactDOM.createRoot(document.getElementById("root"));