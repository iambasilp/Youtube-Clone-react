import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideo from './SearchResultVideo'

const SearchResult = () => {
    const [result, setResult] = useState();
    console.log(result);
    const { searchQuery } = useParams();
    console.log(useParams());
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);
    

    const fetchSearchResults = () => {
      setLoading(true);
        fetchDataFromApi(`search/?q=${searchQuery}`).then(({response}) => {
            console.log(response, "basil");
            setResult(response?.contents);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideo
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}

                </div>
            </div>
        </div>
        
    );
};

export default SearchResult;