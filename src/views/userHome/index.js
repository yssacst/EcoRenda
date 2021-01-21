import MaterialCard from '../../components/materialCard'
import {PerfilBox} from '../../components/perfil-box'
import FormBuscar from '../../components/form/busca'

import './userHome.css'

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
    }
]

export default function UserHome(props) {
    return (
        <div className="user-home">
            <MaterialCard rotulo="Recursos Disponíveis"/>
            <MaterialCard rotulo="Valores estimados para hoje"/>
            <div id="container-favoritos">
                <div id="container-filtro">
                    <FormBuscar />
                </div>
                <div id="container-lista">
                    {itemLista.map(item => {return <PerfilBox dados={item} />})}
                </div>
            </div>
        </div>
    )
}