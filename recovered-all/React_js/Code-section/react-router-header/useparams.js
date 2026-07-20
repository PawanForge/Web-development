import { useParams } from "react-router-dom";

export default function UserDetails() {
  const params = useParams();  
  console.log(params);

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Details</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}
