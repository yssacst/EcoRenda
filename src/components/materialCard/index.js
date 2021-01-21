import Material from '../material'

import './materialCard.css'

export default function MaterialCard(props) {
  const materiais = [
      {nome : "Papel", valor : "0,15", quantidade : "0,2"},
      {nome : "Plástico", valor : "0,18", quantidade : "0,8"},
      {nome : "Vidro", valor : "0,20", quantidade : "0,5"},
      {nome : "Madeira", valor : "8,00", quantidade : "1"},
      {nome : "Cobre", valor : "20,00", quantidade : "1"},
      {nome : "Ferro", valor : "17,00", quantidade : "3"}
  ]

    return (
        <div className="material-card">
            <p>{props.rotulo}</p>
            <div className="material-group">
                {materiais.map(item => {return <Material dados={item} />})}
            </div>
        </div>
    )
}