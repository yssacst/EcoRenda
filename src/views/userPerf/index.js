import MaterialCard from '../../components/materialCard'
import {useState, useEffect} from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EmailIcon from '@material-ui/icons/Email'

import './userPerf.css'

export default function UserPerf(props) {

    const [user, setUser] = useState([])

    useEffect(async () => {
        let dados = await require('../../dados/user.json')
        setUser(dados)
    }, [])
    console.log(user)

    return (
        <div className="user-perf">
            <section>
                <div className="info-g">
                    <div><img className="profile-icon" src={require(`../../img/icons/person.png`).default} alt="profile image" /></div>
                    <div>
                        <span>{user.nome}</span>
                        <span>Atribuição {user.atribuicao}</span>
                        <span>rating</span>
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span><PhoneIcon /> {user.telefone}</span>
                    <span><PhoneAndroidIcon /> {user.celular}</span>
                    <span><EmailIcon/> {user.email}</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>CEP: {user.cep}</span>
                    <span>Estado: {user.estado}</span>
                    <span>Bairro: {user.bairro}</span>
                    <span>Rua: {user.rua}</span>
                    <span>Num: {user.num}</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>{user.desc}</span>
                </div>
            </section>

            <section>
                <MaterialCard rotulo="SEUS RECUROS" />
                <MaterialCard rotulo="SEUS VALORES" />
            </section>
        </div>
    )
}