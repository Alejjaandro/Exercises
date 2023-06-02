import {useState, useEffect} from 'react'

export default function useFetch(url, setState) {
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setState(data));
    }, []);
}
