import { Welcome } from "./Welcome";

function Button(){
    if(Welcome.nama == null){
        return <button>Login</button>
    }
    else{
        return <Welcome nama={Welcome.props.nama}/>
    }
}

export default Button;