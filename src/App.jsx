import { GithubUsers } from "./GithubUsers";
export default function App() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <GithubUsers />
     </div>
    
  );
}

// import useCurrentLocation from './UseCurrentLocation';

// export default function App() {
//     const { location, getLocation, error, loading } = useCurrentLocation();
  
//     return (
//       <div>
//         <h1>Current Location</h1>
//         {loading && <p>Loading location data...</p>}
//         {error && <p>Error: {error}</p>}
//         {!loading && !error && (
//           <div>
//             <p>Latitude: {location.latitude || 'Not available'}</p>
//             <p>Longitude: {location.longitude || 'Not available'}</p>
//           </div>
//         )}
//         <button onClick={getLocation} disabled={loading}>
//           {loading ? 'Refreshing...' : 'Refresh Location'}
//         </button>
//       </div>
//     )
//   }
  

  

