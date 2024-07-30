import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { fetchProjectsByName } from '../util/http.js'
import { useQuery } from "@tanstack/react-query";
import PropertyFullPage from "../components/PropertyFullPage.jsx";

function Projects() {
  const params = useParams();
  const classify = str => str.replace(/[a-z][a-z]*-?/g, ([f, ...rest]) => f.toUpperCase() + rest.join('').replace('-', ' '));
  const projectId = classify(params.projectname);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['projects', projectId],
    queryFn: ({ queryKey }) => fetchProjectsByName(queryKey[1])
  });
  let content;
  if (isPending) {
    content = 'Pending';
  }

  if (isError) {
    content = 'Error' + error.code + error.info + data;
  }

  if (data) {
    //setFeaturedProjects(data);
    content = <PropertyFullPage data={data['result'][0]}/>;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Projects;
