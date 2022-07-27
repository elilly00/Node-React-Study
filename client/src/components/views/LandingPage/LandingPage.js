import React, { useEffect}  from 'react';
import axios from 'axios';

function LandingPage() { 
    // LandinPage에 들어오자마자 useEffect를 실행한다.
    useEffect(() => {
        axios.get("/api/hello") // request를 Server에 보냄(endpoint: "/api/hello")
        .then(response => console.log(response.data)); // Server에서 보낸 response를 console창에 띄움
    }, []);

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            시작페이지
        </div>
    );
}

export default LandingPage;