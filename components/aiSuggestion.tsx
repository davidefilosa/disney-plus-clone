"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AiSuggestion = ({ term }: { term: string }) => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    const getSuggestion = async () => {
      const response = await axios.post("/api/getMoviesSuggestion", {
        term,
      });

      console.log(response.data.content);
      setResponse(response.data.content);
    };
    getSuggestion();
  }, []);

  return (
    <div className="flex space-x-5 mt-32 xl:mt-42 p-10 pb-0">
      <div className="animate-pulse rounded-full bg-gradient-to-t from-purple-400 h-10 w-10 border-2 flex-shrink-0 border-white" />

      <div>
        <p className="text-sm text-purple-400">
          Azure Open AI Assistant Suggests:{" "}
        </p>
        <p className="italic text-xl">{response}</p>
      </div>
    </div>
  );
};

export default AiSuggestion;
