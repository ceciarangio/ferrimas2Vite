
import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import './PoliticaPrivacidad.scss';
import { useTranslation } from 'react-i18next';


export default function PoliticaPrivacidad() {
  const { t } = useTranslation();
  return (
    <>
    <HeaderGeneral/>
    <div className="politicaPrivacidad">
      <h1>{t("translated-polpriv-titulo")}</h1>
      <p dangerouslySetInnerHTML={{__html: t("translated-polpriv-contenido")}}/>

      </div>
      <div className="politicaPrivacidad-footer">
          <Footer />
        </div>
    </>
  );
}



