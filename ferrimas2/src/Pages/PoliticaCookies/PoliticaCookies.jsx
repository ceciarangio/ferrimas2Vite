import Footer from "../../components/Footer/Footer";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import './PoliticaCookies.scss';
import { useTranslation } from 'react-i18next';


export default function PoliticaCookies(){
  const { t } = useTranslation();


    return <>
    <HeaderGeneral/>
    <div className="politicaCookies">
              <h1>{t("translated-polcookies-titulo")}</h1>
      <p dangerouslySetInnerHTML={{__html:t("translated-polcookies-contenido")}} />
      </div>
      <div className="politicaPrivacidad-footer">
        <Footer />
      </div>
    </>
}