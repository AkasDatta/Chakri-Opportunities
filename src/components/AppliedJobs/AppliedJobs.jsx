import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
      fetch('/jobDetails.json')
      .then(res => res.json())
      .then(data =>  console.log (data));
     
    },[])

    const [featuredJobData, setFeaturedJobData] = useState({});

    useEffect(() =>{
        const exists = featuredJobs.find(singleData => singleData.id == id);
        if(exists) {
            setFeaturedJobData(exists || {});
        }
    }, [featuredJobs]);

    const {job_description, job_responsibilities, educational_requirements, experiences, salary, job_title, phone, email, address} = featuredJobData;


    const handleToSetLocalStorage = (featuredJobData) => {
        addToDb(id);
    }
    return (
        <div>

        </div>
    )
};

export default AppliedJobs;