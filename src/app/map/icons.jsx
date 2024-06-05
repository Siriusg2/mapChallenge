import { BiSolidDog } from "react-icons/bi";
import { TbInnerShadowTopRightFilled } from "react-icons/tb";

import L from "leaflet";
import { renderToString } from "react-dom/server";

const dogIcon = L.divIcon({
  className: "",
  html: renderToString(<BiSolidDog size={40} />),
});

const check = L.divIcon({
  className: "",
  html: renderToString(<TbInnerShadowTopRightFilled size={15} color='red' />),
});

export { dogIcon, check };
