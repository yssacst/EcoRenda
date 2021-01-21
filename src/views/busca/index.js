
import FormBuscar from '../../components/form/busca'
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'



const itemLista = [
    {
    perfilType : "Coletor",
    name: "José",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },
    {
    perfilType : "Estabelecimento",
    name: "Gustavo",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },
    {
    perfilType : "Doador",
    name: "Rayssa",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },
    {
    perfilType : "Doador",
    name: "Rayssa",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },
    {
    perfilType : "Doador",
    name: "Thalis",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },
    {
    perfilType : "Coletor",
    name: "Lucas",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    }, 
    {
    perfilType : "Doador",
    name: "Rayssa",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
    },       
]

export default function ViewBusca() {
    return (

        <div>

          
            <div>
            <FormBuscar />
       
            {itemLista.map(item => {return <PerfilBox dados={item} />})}

            </div> 
        </div>
    )
}