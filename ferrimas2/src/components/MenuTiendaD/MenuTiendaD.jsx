

import { useTranslation } from "react-i18next";
import "./MenuTiendaD.scss"; // Asegúrate de tener la ruta correcta

export default function MenuTiendaD() {
  const {t} = useTranslation();
  return (
    <>
      <div className="vertical-navbarTienda">
        <h2 className="name-Tienda">{t("translated-shop-menuTienda-0")}</h2>

        <a href="/herramientas">
        <h3 className="h3-MenuTiendad">{t("translated-shop-menuTienda-1")}</h3>
        <h3 className="h3-MenuTienda">{t("translated-shop-menuTienda-2")}</h3>
        </a>
        <a href="/carteleria">
          <h3>{t("translated-shop-menuTienda-3")}</h3>
        </a>
        <a href="/elementos-seguridad">
          <h3 className="h3-MenuTiendad">{t("translated-shop-menuTienda-4")}</h3>
          <h3 className="h3-MenuTienda">{t("translated-shop-menuTienda-5")}</h3>
        </a>
        <a href="/iluminacion">
          <h3>{t("translated-shop-menuTienda-6")}</h3>
        </a>
        <a href="/aceites">
          <h3>{t("translated-shop-menuTienda-7")}</h3>
        </a>
        <a href="/capazos">
          <h3>{t("translated-shop-menuTienda-8")}</h3>
        </a>
      </div>
    </>
  );
}
