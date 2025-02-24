import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StreamList = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await axios.get("http://localhost:8000/streams");
        setStreams(response.data);
      } catch (error) {
        console.error("Error fetching streams:", error);
      }
    };

    fetchStreams();
  }, []);

  return (
    <div>
      <h2>Available 3D Models (Streams)</h2>
      <ul>
        {streams.map((stream) => (
          <li key={stream.id}>
            <Link to={`/viewer/${stream.id}`}>
              {stream.name} - {stream.description || "No description"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
