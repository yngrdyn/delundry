import React, { Component } from 'react';

import './index.css';

class TermsAndConditions extends Component {
  render() {
    return (
      <div className="terms-and-conditions">
          <h1>Términos del servicio</h1>
          <p>
            EL proceso de recogida, lavado, doblado y entrega se realizan con un plazo mínimo de 20 horas, y 
            máximo de 72 horas, pudiendo realizarse una recogida y entrega urgente en el mismo día con un coste 
            adicional de 15€ con previa confirmación de la lavandería.
          </p>
          <p>
            Cada CARGA debe estar compuesta por el mismo tipo de prenda según su configuración y materiales 
            básicos, si son prendas rellenas de fibra sintética como cojines, edredones, y otras prendas 
            similares deben lavarse aisladas de las demás; también el caso de prendas rellenas de plumas que 
            deben lavarse separadamente, existe el caso de las prendas lanosas (con pelos) como las mantas, 
            y otras similares que ameritan estar aisladas, y el caso de los algodones, como lo son las 
            sabanas, colchas, toallas, algunos manteles y prendas de cocina, se lavaran en una misma carga 
            (es más eficiente el lavado separado de las toallas cuando el volumen de las mismas cubren una 
            CARGA).
          </p>
          <p>
            La empresa NO se responsabiliza de posibles deterioros, pérdidas o traspasos de color sufridos por 
            las prendas durante el proceso de lavado, la ropa debe ser entregada ya seleccionada y separada por 
            colores, en caso de que se prefiera lavar por separado, y con la seguridad que admite lavado en 
            lavadora y no precisa de limpieza en seco.
          </p>
          <p>
            La empresa NO es responsable del deterioro en tejidos que ameriten fuertes tratamientos o 
            remojos con productos antimachas en los casos de intentar salvar prendas gravemente dañadas con 
            manchas, ya que para salvarlas será necesario aplicar altas concentraciones de productos que 
            pudieran debilitar las fibras de las mismas.
          </p>
          <p>
            Así mismo, la empresa, TAMPOCO se hace responsable si los deterioros son producidos durante el 
            proceso de secado, si alguna prenda no admite secado en secadora, o no se desea que se seque en 
            secadora, debe ser indicado en el momento de la recogida y entregada separada del resto de la 
            colada.
          </p>
          <p>
            La empresa SI se responsabiliza si durante el proceso de lavado o secado, las prendas, aun 
            cumpliendo con las especificaciones del apartado anterior, sufre cualquier tipo de deterioro 
            por mala manipulación, o mal estado de las máquinas.
          </p>
          <p>
            Todos los lavados incluyen una dosis suficiente de detergente, suavizante y producto 
            blanqueador de acuerdo con las capacidades de cada una de las máquinas.
          </p>
      </div>
    );
  }
}

export default TermsAndConditions;
