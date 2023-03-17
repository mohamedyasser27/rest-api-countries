import markerpng from "../assets/images/marker-icon.png";
import shadowpng from "../assets/images/marker-shadow.png";

const markerIcon = L.icon({
  iconUrl: markerpng,
  shadowUrl: shadowpng,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  shadowAnchor: [11, 41],
});
export default markerIcon;
