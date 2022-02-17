import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function useCsvData(pathToCsvFile) {
    const [data, setData] = useState();
    useEffect(() => {
        const getCsvData = async () => {
            try {
                const response = await fetch(pathToCsvFile);
                const reader = response.body.getReader();
                const result = await reader.read(); // raw array
                const decoder = new TextDecoder('utf-8');
                const csv = decoder.decode(result.value); // the csv text
                const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
                const rows = results.data; // array of userInfo
                setData(rows);
            } catch (error) {
                console.error(error.message);
            }
        };
        if (pathToCsvFile) {
            getCsvData();
        }

        //CleanUp
        return () => {
            setData(null);
        };
    }, []);
    return data;
}

export default useCsvData;
