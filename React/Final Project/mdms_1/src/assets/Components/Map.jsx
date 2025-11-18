// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { useEffect, useState } from "react";
// import L from "leaflet";

// // Fix Leaflet icon URLs
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
// import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl,
//   iconUrl,
//   shadowUrl,
// });

// // Force correct map rendering after container loads
// function ResizeMap() {
//   const map = useMap();
//   useEffect(() => {
//     const t = setTimeout(() => map.invalidateSize(), 300);
//     return () => clearTimeout(t);
//   }, [map]);
//   return null;
// }

// export default function Map() {
//   const [position, setPosition] = useState([51.505, -0.09]);

//   // Get user location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           setPosition([pos.coords.latitude, pos.coords.longitude]);
//         },
//         (err) => console.error(err)
//       );
//     }
//   }, []);

//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       scrollWheelZoom={true}
//       className="w-full h-full"
//     >
//       <ResizeMap />

//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; OpenStreetMap contributors"
//       />

//       <Marker position={position}>
//         <Popup>You are here!</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mangalorePos = [12.9141, 74.8560];

  return (
    <div className="w-full h-full">
      <MapContainer
        center={mangalorePos}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}
