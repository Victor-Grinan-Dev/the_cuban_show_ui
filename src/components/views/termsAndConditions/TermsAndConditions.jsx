import React from "react";
import { useSelector } from "react-redux";
import genStyle from "../../../style/styleGeneral.module.css";

const TermsAndConditions = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const darkMode = useSelector((state) => state.app.darkMode);

  if (currentLang === "es") {
    return (
      <div className={genStyle.view}>
        <div className={!darkMode ? genStyle.textPage : genStyle.textPageDark}>
          <h3>Terminos & Condiciones</h3>
          <br />
          <p>Estimado usuario: </p>
          <p>
            En cumplimiento del Reglamento General de Protección de Datos (GDPR,
            por sus siglas en inglés), nos gustaría informarte sobre cómo
            procesamos y protegemos tus datos personales.
          </p>{" "}
          <br />
          <p>
            Queremos informarte también sobre cómo la California Privacy Rights
            Act (CPRA) afecta tus derechos de privacidad y cómo protegemos tus
            datos personales. Valoramos tu privacidad y nos comprometemos a
            cumplir con los estándares más altos de protección de datos.
          </p>
          <br />
          <h4>Tus derechos: </h4>
          <br />
          <p>
            De acuerdo con la CPRA, tienes derechos adicionales sobre tus datos
            personales. Estos derechos incluyen:
          </p>
          <br />
          <ul>
            <li>
              * El derecho a saber qué datos personales recopilamos sobre ti y
              cómo los utilizamos.
            </li>
            <li>
              * El derecho a solicitar la eliminación de tus datos personales.
            </li>
            <li>
              * El derecho a optar por no participar en la venta de tus datos
              personales.
            </li>
            <li>
              * El derecho a acceder y recibir una copia electrónica de tus
              datos personales.
            </li>
            <li>* El derecho a corregir datos inexactos o incompletos.</li>
          </ul>
          <br />
          <p>
            Por nuestra parte, esta aplicación o nuestra organización NO recoge
            ningún tipo de datos personales de nuestros usuarios. Si prestamos
            atención al uso del sitio web a través de los análisis de Google
            como dato general.
          </p>
          <br />
          <p>
            Al continuar utilizando nuestros servicios, entendemos que has leído
            y comprendido nuestra política de privacidad y aceptas el
            procesamiento de tus datos personales de acuerdo con los términos
            aquí establecidos.
          </p>
          <br />
          <p>
            Si tienes alguna pregunta o inquietud sobre nuestra política de
            privacidad, no dudes en ponerte en contacto con nosotros.
          </p>
          <br />
          <p>Atentamente,</p>
          <br />
          <p>Equipo de producción: The Cuban Show</p>
          <p>thecubanshow502@gmail.com</p>
        </div>
      </div>
    );
  }
  return (
    <div className={genStyle.view}>
      <div className={!darkMode ? genStyle.textPage : genStyle.textPageDark}>
        <h3>Terms & Conditions</h3>
        <br />
        <p>Dear user: </p>
        <p>
          In compliance with the General Data Protection Regulation (GDPR), we
          would like to inform you about how we process and protect your
          personal data.
        </p>
        <br />
        <p>
          We also want to inform you about how the California Privacy Rights Act
          (CPRA) affects your privacy rights and how we protect your personal
          data. We value your privacy and are committed to complying with the
          highest standards of data protection.
        </p>
        <br />
        <p>Your rights:</p>
        <br />
        <p>
          Under the CPRA, you have additional rights regarding your personal
          data. These rights include:
        </p>
        <br />
        <ul>
          <li>
            * The right to know what personal data we collect about you and how
            we use it.
          </li>
          <li>* The right to request the deletion of your personal data.</li>
          <li>* The right to opt out of the sale of your personal data.</li>
          <li>
            * The right to access and receive an electronic copy of your
            personal data.
          </li>
          <li>* The right to correct inaccurate or incomplete data.</li>
        </ul>
        <br />
        <p>
          On our part, this application or our organization DOES NOT collect any
          type of personal data from our users. We only pay attention to the use
          of the website through Google Analytics as general data.
        </p>
        <br />
        <p>
          By continuing to use our services, we understand that you have read
          and understood our privacy policy and accept the processing of your
          personal data in accordance with the terms set forth herein.
        </p>
        <br />
        <p>
          If you have any questions or concerns about our privacy policy, please
          do not hesitate to contact us.
        </p>
        <br />
        <p>Sincerely,</p>
        <p>The Cuban Show Production Team</p>
        <p>thecubanshow502@gmail.com</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
