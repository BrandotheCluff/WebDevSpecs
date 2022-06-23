// import React, {useEffect, useState} from "react";
// import axios from "axios";

// const useAxios = (url) => {
//     const [data, setData] = useState({})


//     useEffect(() => {
//        let options = {
//             method: 'GET',
//             url: `https://exercisedb.p.rapidapi.com/exercises/${url}`,
//             headers: {
//                 'X-RapidAPI-Key': 'e8565680e9msh721a60b51d1533cp184228jsn2a4a6a37a7bc',
//                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//               }
//             };
        
//         axios.request(options).then((response) => {
//             console.log(response.data);
//             return response.data
//         }).catch(function (error) {
//             console.error(error);
//         });

//     }, [])
//     return data

// }

// export default useAxios